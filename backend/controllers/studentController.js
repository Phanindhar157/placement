const StudentDetails = require("../models/StudentDetails");

// Get Student Details
const getStudentDetails = async (req, res) => {
  try {
    const studentId = req.user.id;
    const studentDetails = await StudentDetails.findOne({ studentId }).populate("studentId");
    if (!studentDetails) {
      return res.status(404).json({ message: "Student details not found" });
    }
    res.status(200).json(studentDetails);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update Student Details
const updateStudentDetails = async (req, res) => {
  try {
    const studentId = req.user.id;
    const updatedDetails = await StudentDetails.findOneAndUpdate(
      { studentId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "Student details updated successfully", updatedDetails });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getStudentDetails, updateStudentDetails };