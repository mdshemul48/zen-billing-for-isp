import express from "express";
import sequelize from "./config/DB";
import mainSeederFunc from "./seeders/mainSeeder";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(async () => {
  await mainSeederFunc();
  app.listen(port, () => {
    console.log(`api working on http://localhost:${port}`);
  });
});
