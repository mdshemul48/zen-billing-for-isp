import { Request, Response } from "express";
import ResellerType from "../../types/ResellerType";
import { body, validationResult } from "express-validator";
import Reseller from "../../model/Reseller";

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
