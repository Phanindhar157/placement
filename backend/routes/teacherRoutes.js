const express = require("express");
const { getStudents, verifyStudentDetails } = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get All Students
router.get("/students", authMiddleware, getStudents);

// Verify Student Details
router.put("/verify/:studentId", authMiddleware, verifyStudentDetails);

module.exports = router;