import { Router } from "express";
import todoRoutes from "@/routes/todoRoutes";

const router = Router();

router.use("/todos", todoRoutes);

router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

export default router;