import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest as express.RequestHandler[],
  updateCurrentUser
);
export { router as UserRouter };
