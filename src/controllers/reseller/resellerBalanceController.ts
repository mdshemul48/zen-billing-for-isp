import { Response } from "express";
import Reseller from "../../model/Reseller";
import modifiedRequest from "../../types/modifiedRequest";

import resellerBalanceRechargeLogType from "../../types/ResellerBalanceRechargeLogType";

// @route   POST api/reseller/balanceRecharge
// @desc    Recharging Balance for Reseller
// @access  Private (only for admin)
export const resellerBalanceRecharge = async (req: modifiedRequest, res: Response) => {
  const { resellerId, balance, remarks } = <resellerBalanceRechargeLogType>req.body;
  const user = req.user;

  const reseller = await Reseller.findOne({
    where: { id: resellerId },
  });

  if (!reseller) {
    return res.status(404).json({
      errors: [
        {
          msg: "Reseller not found.",
        },
      ],
    });
  }

  res.send("gg");
};
