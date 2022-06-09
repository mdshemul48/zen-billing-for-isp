import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import sequelize from "./config/DB";
import mainSeederFunc from "./seeders/mainSeeder";

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(async () => {
  await mainSeederFunc();
  app.listen(port, () => {
    console.log(`api working on http://localhost:${port}`);
  });
});
