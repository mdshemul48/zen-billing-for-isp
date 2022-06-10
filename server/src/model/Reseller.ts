import sequelize from "../config/DB";
import Sequelize from "sequelize";

class Reseller extends Sequelize.Model {
  name!: string;
  address!: string;
  phone!: string;
  balance!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Reseller.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    balance: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "reseller",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Reseller;
