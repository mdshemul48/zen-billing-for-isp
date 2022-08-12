import sequelize from "../config/DB";
import Sequelize from "sequelize";

class ResellerUser extends Sequelize.Model {
  resellerId!: number;
  userId!: number;
}

ResellerUser.init(
  {
    resellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "ResellerUser", createdAt: "created_at", updatedAt: "updated_at" }
);

export default ResellerUser;
