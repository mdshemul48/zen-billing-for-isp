import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import ResellerType from "../../types/ResellerType";

import Reseller from "../../model/Reseller";

// @route   POST api/reseller
// @desc    creating Reseller
// @access  Private (only for admin)
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
