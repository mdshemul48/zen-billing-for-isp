import sequelize from "../config/DB";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";

const User = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,

      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: { type: Sequelize.STRING },

    email: { type: Sequelize.STRING },

    password: {
      type: Sequelize.STRING,
      set(value: string) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hash);
      },
    },

    role: {
      type: Sequelize.ENUM("reseller", "admin", "employee"),
      defaultValue: "admin",
    },
  },
  { timestamps: true }
);

export default User;
