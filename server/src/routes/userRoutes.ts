import { Router } from "express";

import authentication from "../middleware/authenticationMiddleware";
import { createUserValidation, createUser, userLoginValidation, userLogin } from "../controllers/user/userController";

const router = Router();

router.route("/").post(authentication, createUserValidation, createUser);
router.post("/login", userLoginValidation, userLogin);

export default router;
