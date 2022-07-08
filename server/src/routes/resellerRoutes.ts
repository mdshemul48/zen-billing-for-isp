import { Router } from "express";
import { createReseller, resellerValidation } from "../controllers/reseller/reseller";
import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin"]), resellerValidation, createReseller);

export default router;
