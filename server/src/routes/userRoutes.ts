import { Router } from "express";

import { createUserValidation, createUser } from "../controllers/user/userController";

const router = Router();

router.route("/users").post(createUserValidation, createUser);

export default router;
