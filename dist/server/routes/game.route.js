import express from 'express';
import '../../shared/models/player.model.js';
import { GameModel } from '../schemas/game.schema.js';
import { UserModel } from '../schemas/user.schema.js';
const gameRouter = express.Router();
gameRouter.get('/game-info-player-vs-computer', function (req, res) {
    GameModel.find()
        .then(info => {
        res.json({ info });
    })
        .catch(err => {
        res.status(501).json({ Error: err });
    });
});
gameRouter.post('/game-info-player-vs-computer/:id', async function (req, res) {
    const id = req.params.id;
    const player = await UserModel.findOne({ _id: id }, '-password -profilePic');
    const game = new GameModel({
        date: new Date(),
        players: [player]
    });
    const computerId = await UserModel.findById({ _id: '626e11e319e8267d756e8802' });
    game.save()
        .then(data => {
        //save computer's object Id 
        data.players.push(computerId.id);
        game.save();
        res.json({ data });
    })
        .catch(err => res.status(500).json({ Error: err }));
});
export { gameRouter };
//# sourceMappingURL=game.route.js.map