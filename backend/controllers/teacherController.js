const StudentDetails = require("../models/StudentDetails");

// Get All Students
const getStudents = async (req, res) => {
  try {
    const students = await StudentDetails.find().populate("studentId", "name email");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Verify Student Details
const verifyStudentDetails = async (req, res) => {
  const { studentId } = req.params;
  const { marks, feedback } = req.body;

  try {
    const student = await StudentDetails.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update marks and feedback
    student.certifications.forEach((cert) => {
      cert.verified = true;
      cert.marks = marks;
      cert.feedback = feedback;
    });

    await student.save();
    res.status(200).json({ message: "Student details verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getStudents, verifyStudentDetails };