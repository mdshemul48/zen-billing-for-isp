import { Response, Request } from "express";
import { body, validationResult } from "express-validator";

import Package from "../../model/Package";

import PackageType from "../../types/PackageType";

// @route   POST api/package
// @desc    creating package
// @access  Private (only for admin)
export const createPackageValidation = [
  body("name")
    .isString()
    .withMessage("Package name not provided.")
    .custom(async (name) => {
      const alreadyExistPackage = await Package.findOne({
        where: {
          name,
        },
      });

      if (alreadyExistPackage) {
        throw new Error("Package Already exist.");
      }
      return true;
    }),
  body("profileName").isString().withMessage("profileName not provided."),
  body("price").notEmpty().withMessage("Price name not Provided.").isInt().withMessage("Price name must be number"),
];
export const createPackage = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { name, profileName, price, remarks } = <PackageType>req.body;

  try {
    const createdPackage = await Package.create({ name, profileName, price, remarks });
    return res.status(201).json({
      msg: "Successfully Package created.",
      createdPackage,
    });
  } catch (error) {
    return res.status(500).json({
      errors: [
        {
          msg: "Something went wrong while creating Package.",
        },
      ],
    });
  }
};
