import { Router } from "express";

import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";
import { createUserValidation, createUser, userLoginValidation, userLogin } from "../controllers/user/userController";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin", "reseller"]), createUserValidation, createUser);
router.post("/login", userLoginValidation, userLogin);

export default router;
