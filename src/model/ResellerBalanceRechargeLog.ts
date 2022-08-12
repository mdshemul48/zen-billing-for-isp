import sequelize from "../config/DB";
import Sequelize from "sequelize";

class ResellerBalanceRechargeLog extends Sequelize.Model {
  resellerId!: number;
  userId!: number;
  balance!: number;
  remarks?: string;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}
ResellerBalanceRechargeLog.init(
  {
    resellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    balance: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    remarks: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "resellerBalanceRechargeLog",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default ResellerBalanceRechargeLog;
