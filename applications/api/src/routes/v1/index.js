const express = require("express");
const articleRoutes = require("./article");
const authRoutes = require("./auth");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.json({ status: 200 }));

router.use("/articles", articleRoutes);
router.use("/auth", authRoutes);

module.exports = router;
