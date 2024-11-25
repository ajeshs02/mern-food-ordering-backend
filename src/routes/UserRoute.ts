import express from "express";
import { createCurrentUser } from "../controllers/UserController";

const router = express.Router();

router.post("/", createCurrentUser);

export { router as UserRouter };
