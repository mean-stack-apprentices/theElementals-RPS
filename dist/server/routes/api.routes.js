import express from 'express';
import { gameRouter } from './game.route.js';
import { imageRouter } from './image.route.js';
import { userRouter } from './user.route.js';
export const apiRouter = express.Router();
apiRouter.use('/', userRouter);
apiRouter.use('/', imageRouter);
apiRouter.use('/', gameRouter);
apiRouter.use((req, res, next) => {
    if (res.locals.data) {
        res.status(200).json({ data: res.locals.data });
    }
    else {
        next();
    }
});
apiRouter.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400).send(err);
    }
    res.status(500).send(err);
});
apiRouter.all("/*", (req, res) => {
    console.log("Not Found");
    res.sendStatus(404);
});
//# sourceMappingURL=api.routes.js.map