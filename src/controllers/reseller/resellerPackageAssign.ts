import { Response } from "express";
import { body, validationResult } from "express-validator";

import ResellerHasPackage from "../../model/ResellerHasPackage";
import Request from "../../types/modifiedRequest";
import sequelize from "../../config/DB";

export const setPackageForResellerValidation = [
  body("packageIds").isArray().withMessage("package Must be array."),
  body("resellerId").isInt().withMessage("reseller Id Must provided in Number"),
];
export const setPackageForReseller = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { packageIds, resellerId } = <{ packageIds: [Number]; resellerId: Number }>req.body;

  const transaction = await sequelize.transaction();
  try {
    const packageIdWithReseller = packageIds.map((packageId) => ({ resellerId, packageId }));
    const packageAdded = await ResellerHasPackage.bulkCreate(packageIdWithReseller, { transaction });
    await transaction.commit();

    return res.status(201).json({ msg: "package added to reseller successfully", packageAdded });
  } catch (err) {
    transaction.rollback();

    return res.status(500).json({
      errors: [
        {
          msg: "something went wrong setting package to reseller.",
        },
      ],
    });
  }
};
