import express from "express";
import sequelize from "./config/DB";

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`api working on http://localhost:${port}`);
  });
});
