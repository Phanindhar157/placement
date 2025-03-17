const express = require("express");
const { getStudentDetails, updateStudentDetails } = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get Student Details
router.get("/details", authMiddleware, getStudentDetails);

// Update Student Details
router.put("/update", authMiddleware, updateStudentDetails);

module.exports = router;