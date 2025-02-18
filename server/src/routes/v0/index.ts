import express from "express";
import userRoutes from "./users";
import postRoutes from "./posts";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export default router;
