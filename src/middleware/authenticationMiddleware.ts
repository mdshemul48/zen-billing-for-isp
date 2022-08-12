import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import userInterface from "../types/UserType";
import modifiedRequest from "../types/modifiedRequest";

const authentication = async (req: modifiedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")!.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const decoded = <userInterface>jwt.verify(token, process.env.JWT_SECRET!);
    if (!decoded) {
      return res.status(401).json({ msg: "Token is not valid" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authentication;
