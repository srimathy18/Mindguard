const express = require("express");
const { registerUser, loginUser } = require("../controllers/usercontroller");
const userAuth = require("../middleware/auth");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", userAuth, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
