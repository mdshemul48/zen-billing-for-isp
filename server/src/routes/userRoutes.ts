import { Router } from "express";

import { createUserValidation, createUser, userLoginValidation, userLogin } from "../controllers/user/userController";

const router = Router();

router.route("/").post(createUserValidation, createUser);
router.post("/login", userLoginValidation, userLogin);

export default router;
