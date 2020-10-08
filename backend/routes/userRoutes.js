import express from "express";
const router = express.Router();
import {
  login,
  getUserProfile,
  signupUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", signupUser);

router.post("/login", login);
router.get("/profile", protect, getUserProfile);

router.get("/:uid");

export default router;
