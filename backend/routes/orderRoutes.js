import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrder,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);

router.get("/myorders", protect, getMyOrders);

router.get("/:id", protect, getOrder);

router.put("/:id/pay", protect, updateOrderToPaid);

export default router;
