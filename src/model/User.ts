import sequelize from "../config/DB";
import Sequelize from "sequelize";
import bcrypt from "bcryptjs";

class User extends Sequelize.Model {
  readonly id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: "admin" | "reseller" | "employee";
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      allowNull: false,

      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: { allowNull: false, type: Sequelize.STRING },

    email: { allowNull: false, type: Sequelize.STRING },

    password: {
      allowNull: false,
      type: Sequelize.STRING,
      set(value: string) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hash);
      },
    },

    role: {
      allowNull: false,
      type: Sequelize.ENUM("reseller", "admin", "employee"),
      defaultValue: "admin",
    },
  },
  { sequelize, modelName: "user", createdAt: "created_at", updatedAt: "updated_at" }
);

export default User;
