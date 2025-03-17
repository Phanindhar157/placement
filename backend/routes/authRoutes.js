const express = require("express");
const { registerUser, validateOTP, loginUser } = require("../controllers/authController");

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Validate OTP
router.post("/validate-otp", validateOTP);

// Login User
router.post("/login", loginUser);

module.exports = router;