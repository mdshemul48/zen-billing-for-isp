import { Router } from "express";
import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";

import { createReseller, resellerValidation } from "../controllers/reseller/resellerController";
import { setResellerUser, setResellerUserValidation } from "../controllers/reseller/resellerUserController";
import { resellerBalanceRecharge } from "../controllers/reseller/resellerBalanceController";
import { setPackageForReseller, setPackageForResellerValidation } from "../controllers/reseller/resellerPackage";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin"]), resellerValidation, createReseller);
router
  .route("/setUserToReseller")
  .post(authentication, authorizeUserByRole(["admin"]), setResellerUserValidation, setResellerUser);

router.route("/resellerBalance").post(authentication, authorizeUserByRole(["admin"]), resellerBalanceRecharge);

router
  .route("/managePackage")
  .post(authentication, authorizeUserByRole(["admin"]), setPackageForResellerValidation, setPackageForReseller);
export default router;
