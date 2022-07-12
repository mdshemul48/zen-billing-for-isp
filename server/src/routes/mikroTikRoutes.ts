import { Router } from "express";
import { createMikroTik, createMikroTikValidation } from "../controllers/mikroTik/mikroTikController";
import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin"]), createMikroTikValidation, createMikroTik);

export default router;
