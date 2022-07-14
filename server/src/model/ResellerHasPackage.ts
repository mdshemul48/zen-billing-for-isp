import sequelize from "../config/DB";
import Sequelize from "sequelize";

class ResellerHasUser extends Sequelize.Model {
  resellerId!: number;
  packageId!: number;
}

ResellerHasUser.init(
  {
    resellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    packageId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ResellerHasPackage",
  }
);

export default ResellerHasUser;
