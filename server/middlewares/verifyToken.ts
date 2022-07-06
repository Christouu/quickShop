import express, { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

interface IUserRequest extends express.Request {
  user: any;
  isAdmin: string;
}

const verifyToken = (req: IUserRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    //@ts-ignore
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SEC, (err: any, user: any) => {
      if (err) res.status(403).json("Invalid token");

      //save the user in req.user
      req.user = user;

      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do this operation!");
    }
  });
};

const verifyTokenAndAdmin = (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json("You are not an Admin, you are not allowed to do this operation");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
