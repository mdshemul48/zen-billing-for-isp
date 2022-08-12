import sequelize from "../config/DB";
import Sequelize from "sequelize";

class Reseller extends Sequelize.Model {
  readonly id!: number;
  name!: string;
  address!: string;
  phone!: string;
  balance!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Reseller.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
