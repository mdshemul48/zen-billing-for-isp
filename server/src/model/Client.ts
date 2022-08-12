import sequelize from "../config/DB";
import Sequelize from "sequelize";

class Client extends Sequelize.Model {
  readonly id!: number;
  // connection info
  userId!: string;
  password!: string;
  billingCycle!: number;
  clientStatus!: "active" | "inactive" | "suspended" | "pending";
  billingDate!: Date;
  // client info
  name!: string;
  address!: string | null;

  phone!: string | null;
  email!: string | null;

  fatherName!: string | null;
  motherName!: string | null;

  nid!: string | null;
  birthDate!: Date | null;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

Client.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    billingCycle: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    billingDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    clientStatus: {
      allowNull: false,
      type: Sequelize.ENUM("active", "inactive", "suspended", "pending"),
      defaultValue: "pending",
    },

    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    phone: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    fatherName: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    motherName: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    nid: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    birthDate: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    modelName: "client",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Client;
