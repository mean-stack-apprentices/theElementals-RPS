import type { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import type { User } from "../../shared/models/user.model.js";

interface AuthRequest extends Request {
  user?: User;
}
function authHandle(req: AuthRequest, res: Response, next: NextFunction) {
  const cookie = req.cookies["jwt"];
  console.log("auth", cookie);
  jwt.verify(
    cookie,
    process.env.ACCESS_SECRET as string,
    (err: any, result: any) => {
      if (err) {
        return res.sendStatus(403);
      }
      if (result) {
        console.log(result.user, 'this is the user');
        req.user = result.user;
      }
      next();
    }
  );
}

export const authHandler = authHandle;