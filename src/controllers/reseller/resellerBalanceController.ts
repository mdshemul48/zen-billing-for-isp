import { Response } from "express";
import { body } from "express-validator";

import sequelize from "../../config/DB";
import Reseller from "../../model/Reseller";
import modifiedRequest from "../../types/modifiedRequest";
import ResellerBalanceRechargeLog from "../../model/ResellerBalanceRechargeLog";
import resellerBalanceRechargeLogType from "../../types/ResellerBalanceRechargeLogType";

// @route   POST api/reseller/balanceRecharge
// @desc    Recharging Balance for Reseller
// @access  Private (only for admin)
export const resellerBalanceRechargeValidation = [
  body("resellerId").notEmpty().withMessage("reseller Id not provided"),
  body("balance").notEmpty().withMessage("balance not provided."),
];

export const resellerBalanceRecharge = async (req: modifiedRequest, res: Response) => {
  const { resellerId, balance, remarks } = <resellerBalanceRechargeLogType>req.body;
  const user = req.user;

  if (!user) {
    return res.status(404).json({
      errors: [
        {
          msg: "User not found.",
        },
      ],
    });
  }

  const transaction = await sequelize.transaction();

  try {
    const reseller = await Reseller.findByPk(resellerId, { transaction });

    if (!reseller) {
      return res.status(404).json({
        errors: [
          {
            msg: "Reseller not found.",
          },
        ],
      });
    }

    reseller.balance += balance;
    await reseller.save({ transaction });

    await ResellerBalanceRechargeLog.create(
      {
        resellerId,
        userId: user.id,
        balance,
        remarks,
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(202).json({
      msg: "successfully recharged.",
    });
  } catch (err) {
    await transaction.rollback();

    return res.status(500).json({
      errors: [
        {
          msg: "Something went wrong.",
        },
      ],
    });
  }
};
