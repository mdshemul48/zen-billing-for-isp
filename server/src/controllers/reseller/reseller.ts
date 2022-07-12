import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import ResellerType from "../../types/ResellerType";

import Reseller from "../../model/Reseller";
import User from "../../model/User";
import ResellerUser from "../../model/ResellerUser";

export const resellerValidation = [body("name").isString(), body("address").isString(), body("phone").isString()];

export const createReseller = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { name, address, phone } = <ResellerType>req.body;

  try {
    const createdReseller = await Reseller.create({
      name,
      address,
      phone,
    });

    return res.status(201).json({ msg: "Reseller Created Successfully.", createdReseller });
  } catch (err) {
    return res.status(500).json({
      errors: [
        {
          msg: "something went wrong while creating Reseller.",
        },
      ],
    });
  }
};

// @route   POST api/reseller/setUserToReseller
// @desc    setting user with reseller
// @access  Private (only for admin)
export const setResellerUserValidation = [
  body("reseller")
    .isInt()
    .withMessage("Reseller id Not Passed")
    .customSanitizer(async (ResellerId) => {
      const reseller = await Reseller.findOne({
        where: {
          id: ResellerId,
        },
      });
      if (reseller) {
        return reseller;
      }
      return null;
    })
    .custom((value) => {
      if (value) {
        return true;
      }
      throw new Error("Reseller doesn't exist with provided reseller id.");
    }),

  body("user")
    .isInt()
    .withMessage("User Id not provided")
    .customSanitizer(async (userId) => {
      const user = await User.findOne({
        where: {
          id: userId,
        },
      });
      if (user) {
        return user;
      }
      return null;
    })
    .custom((value) => {
      if (value) {
        return true;
      }
      throw new Error("User doesn't exist with provided user id.");
    }),
];

export const setResellerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  const { user, reseller } = <{ user: User; reseller: Reseller }>req.body;
  try {
    const alreadyCreated = await ResellerUser.findOne({
      where: {
        resellerId: reseller.id,
        userId: user.id,
      },
    });
    if (alreadyCreated) {
      return res.status(409).json({
        errors: [
          {
            msg: "User already connect to the reseller.",
          },
        ],
      });
    }
    await ResellerUser.create({
      userId: user.id,
      resellerId: reseller.id,
    });
    return res.status(201).json({ msg: "User and Reseller connection successfully created!" });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          msg: "Something went wrong while create user and reseller connection.",
        },
      ],
    });
  }
};
