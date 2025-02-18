import express from "express";
const router = express.Router();

// GET /api/v1/users
router.get("/", (req, res) => {
	res.json({ message: "List of users" });
});

// POST /api/v1/users
router.post("/", (req, res) => {
	res.json({ message: "User created", data: req.body });
});

export default router;
