import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();
import sequelize from "./config/DB";
import mainSeederFunc from "./seeders/mainSeeder";

// models
import User from "./model/User";
import Reseller from "./model/Reseller";
import Client from "./model/Client";
import MikroTik from "./model/MikroTik";
import ResellerUser from "./model/ResellerUser";
import Package from "./model/Package";
import ResellerHasPackage from "./model/ResellerHasPackage";
// routes imports
import userRoutes from "./routes/userRoutes";
import resellerRoutes from "./routes/resellerRoutes";
import mikroTikRoutes from "./routes/mikroTikRoutes";
import packageRoutes from "./routes/packageRoutes";

// application config
const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all Routes
app.use("/api/user", userRoutes);
app.use("/api/reseller", resellerRoutes);
app.use("/api/mikroTik", mikroTikRoutes);
app.use("/api/package", packageRoutes);

// db Relations
Client.belongsTo(Reseller, { as: "reseller" });
Reseller.belongsTo(MikroTik, { as: "mikroTik" });
Reseller.belongsToMany(User, { foreignKey: "resellerId", through: ResellerUser, as: "user" });
User.belongsToMany(Reseller, { foreignKey: "userId", through: ResellerUser, as: "reseller" });
Client.belongsTo(Package, { as: "package" });
Reseller.belongsToMany(Package, {
  as: "package",
  through: ResellerHasPackage,
});

sequelize.sync({ force: false }).then(async () => {
  await mainSeederFunc();
  app.listen(port, () => {
    console.log(`api working on http://localhost:${port}`);
  });
});
