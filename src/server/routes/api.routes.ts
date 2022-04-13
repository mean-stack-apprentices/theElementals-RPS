import express, { Request, Response, NextFunction } from 'express';
import { imageRouter } from './image.route.js';
import { userRouter } from './user.route.js';

export const apiRouter = express.Router();

apiRouter.use('/', userRouter);
apiRouter.use('/', imageRouter);


apiRouter.use((req,res, next) => {
    if(res.locals.data){
        res.status(200).json({data: res.locals.data})
    }else {
        next();
    }
});

apiRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err.name === 'ValidationError'){
        res.status(400).send(err);
    }
    res.status(500).send(err);
});

apiRouter.all("/*", (req,res) => {
    console.log("Not Found");
    res.sendStatus(404)
});