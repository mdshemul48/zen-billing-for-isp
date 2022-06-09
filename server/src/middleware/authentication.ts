import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userInterface from "../types/UserType";

interface modifiedRequest extends Request {
  user: userInterface;
}

const authentication = async (req: modifiedRequest, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = <userInterface>jwt.verify(token, process.env.JWT_SECRET!);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authentication;
