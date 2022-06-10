import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();
import sequelize from "./config/DB";
import mainSeederFunc from "./seeders/mainSeeder";

// models
import User from "./model/User";
import Reseller from "./model/Reseller";
import Client from "./model/Client";
// routes imports
import userRoutes from "./routes/userRoutes";

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all Routes
app.use("/api/users", userRoutes);

// db Relations
User.hasMany(Reseller);
Reseller.hasMany(Client);

sequelize.sync({ force: false }).then(async () => {
  await mainSeederFunc();
  app.listen(port, () => {
    console.log(`api working on http://localhost:${port}`);
  });
});
