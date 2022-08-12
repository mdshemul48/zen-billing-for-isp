import sequelize from "../config/DB";
import Sequelize from "sequelize";

class Package extends Sequelize.Model {
  readonly id!: string;
  name!: string;
  profileName!: string;
  price!: number;
  remarks?: string;
}

Package.init(
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
    profileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "package", createdAt: "created_at", updatedAt: "updated_at" }
);

export default Package;
