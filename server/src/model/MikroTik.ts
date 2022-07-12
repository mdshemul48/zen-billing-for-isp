import sequelize from "../config/DB";
import Sequelize from "sequelize";

class MikroTik extends Sequelize.Model {
  readonly id!: number;
  name!: string;
  ip!: string;
  username!: string;
  password!: string;
  port!: number;
  remarks?: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

MikroTik.init(
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
    ip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 8728,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    port: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    remarks: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "MikroTik",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default MikroTik;
