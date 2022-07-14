import { Router } from "express";

import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";

import { createPackage, createPackageValidation } from "../controllers/package/packageController";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin"]), createPackageValidation, createPackage);

export default router;
