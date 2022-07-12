import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import MikroTik from "../../model/MikroTik";
import MikroTikType from "../../types/MikroTikType";

// @route   POST api/mikroTik
// @desc    creating new mikroTik
// @access  Private (only for admin)
export const createMikroTikValidation = [
  body("name", "Name required."),
  body("ip", "MikroTik ip is required."),
  body("username", "Username is required."),
  body("password", "Password is required."),
  body("port", "port is required").isInt().withMessage("port must be number."),
];

export const createMikroTik = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { name, ip, username, password, port, remarks } = <MikroTikType>req.body;

  try {
    const alreadyExist = await MikroTik.findOne({
      where: {
        ip,
      },
    });
    if (alreadyExist) {
      return res.status(409).json({
        errors: [
          {
            msg: "MikroTik already exist with this IP.",
          },
        ],
      });
    }
    const createdMikroTik = await MikroTik.create({
      name,
      ip,
      username,
      password,
      port,
      remarks,
    });

    return res.status(201).json({
      msg: "MicroTik created successfully.",
      createdMikroTik,
    });
  } catch (err) {
    return res.status(500).json({
      errors: [
        {
          msg: "Something went wrong while creating MikroTik.",
        },
      ],
    });
  }
};
