import { Router } from "express";
import authentication from "../middleware/authenticationMiddleware";
import authorizeUserByRole from "../middleware/authorizeUserByRoleMiddleware";

import {
  createReseller,
  resellerValidation,
  setResellerUser,
  setResellerUserValidation,
} from "../controllers/reseller/resellerController";

const router = Router();

router.route("/").post(authentication, authorizeUserByRole(["admin"]), resellerValidation, createReseller);
router
  .route("/setUserToReseller")
  .post(authentication, authorizeUserByRole(["admin"]), setResellerUserValidation, setResellerUser);

export default router;
