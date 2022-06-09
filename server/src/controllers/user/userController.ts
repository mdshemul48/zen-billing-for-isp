import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";

import User from "../../model/User";
import userInterface from "../../types/UserType";

// @route   POST api/users
// @desc    Register user
// @access  Private (only for admin)
export const createUserValidation = [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),
  body("role").isIn(["admin", "reseller", "employee"]),
];

export const createUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, password, role } = <userInterface>req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  res.send(user);
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = <userInterface>req.body;

  const user: userInterface = await User.findOne({ where: { email } }) as ;
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
};
