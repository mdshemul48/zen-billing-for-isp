import { Request } from "express";
import userInterface from "./UserType";

export default interface modifiedRequest extends Request {
  user?: userInterface;
}
