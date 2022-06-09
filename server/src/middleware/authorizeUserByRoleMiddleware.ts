import { NextFunction, Response } from "express";
import userInterface from "../types/UserType";
import modifiedRequest from "../types/modifiedRequest";

const authorizeUserByRole = (role: userInterface["role"][]) => {
  return (req: modifiedRequest, res: Response, next: NextFunction) => {
    if (!role.includes(req.user!.role)) {
      return res.status(401).json({
        msg: "You are not authorized to perform this action",
      });
    } else {
      next();
    }
  };
};

export default authorizeUserByRole;
