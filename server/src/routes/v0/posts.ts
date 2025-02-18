import express from "express";
const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
	res.json({ message: "List of posts" });
});

// POST /api/v1/posts
router.post("/", (req, res) => {
	res.json({ message: "Post created", data: req.body });
});

export default router;
