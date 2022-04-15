import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../schemas/user.schema.js';
import {socketConfig } from '../configs/socket.config.js'


export const userRouter = express.Router();
const saltRounds = 10;
const access_secret = socketConfig.secret


userRouter.post('/sign-up', async function(req, res) {
    const {username, password, profilePic} = req.body
  
    const found = await UserModel.findOne({username}).lean()
    if (found){
      res.json({message: "Username is taken. Please insert a unique username."})
    } else {}
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
  
    const user = new UserModel({
      username,
      password: hash,
      profilePic,
    });
    user.save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});


userRouter.post('/vaid-username', function(req, res) {
    const {username} = req.body
  
    UserModel.findOne({ username }).lean().then(username => {
      if (username) {
        res.json({validUsername: false})
      } else {
        res.json({validUsername: true})
      }
    })
});


userRouter.post('/sign-in', async function(req, res) {
    const {username, password} = req.body
    UserModel.findOne({username}).then(user => {
      bcrypt.compare(password, `${user?.password}`, function(err, result) {
        if (result) {
          const accessToken = jwt.sign({user}, access_secret)
          res.cookie('jwt', accessToken, {
            httpOnly: true,
            maxAge: 3600 * 1000,
          })
          res.json({data: {_id: user?._id, username: username, profilePic: user?.profilePic}})
        } else {
          res.sendStatus(502);
        }
      })
    })
})

