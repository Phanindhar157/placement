const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fileUrl: { type: String, required: true },
  verified: { type: Boolean, default: false },
  marks: { type: Number, default: 0 },
  feedback: { type: String, default: "" },
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  verified: { type: Boolean, default: false },
  marks: { type: Number, default: 0 },
  feedback: { type: String, default: "" },
});

const studentDetailsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tenthPercentage: { type: Number, default: 0 }, // 10th Percentage
  twelfthPercentage: { type: Number, default: 0 }, // 12th Percentage
  cgpa: { type: Number, default: 0 }, // CGPA
  githubProfile: {
    contributions: { type: Number, default: 0 }, // Number of contributions
    frequency: { type: Number, default: 0 }, // Frequency of contributions
    communityProjects: { type: Number, default: 0 }, // Community projects
    collaborations: { type: Number, default: 0 }, // Collaborations
  },
  codingPractice: {
    badges: { type: Number, default: 0 }, // Number of badges
    questionsSolved: { type: Number, default: 0 }, // Questions solved
  },
  internshipExperience: {
    type: { type: String, enum: ["IIT/NIT", "Fortune 500", "Small Company", "Other"], default: "Other" },
    duration: { type: Number, default: 0 }, // Duration in months
    isPaid: { type: Boolean, default: false }, // Paid or unpaid
  },
  certifications: [certificationSchema], // Standard certifications
  projects: {
    count: { type: Number, default: 0 }, // Number of projects
    type: { type: String, enum: ["IIT/NIT", "Government", "Web/Mobile", "Mini"], default: "Mini" },
  },
  fullStackExperience: { type: Boolean, default: false }, // Full Stack Developer Experience
  codingCompetitions: {
    count: { type: Number, default: 0 }, // Number of competitions
    prizes: { type: String, enum: ["First", "Second", "Third", "Participated"], default: "Participated" },
  },
  inhouseProjects: { type: Number, default: 0 }, // Inhouse projects
  professionalMembership: { type: Boolean, default: false }, // Membership of professional bodies
  shlAssessment: { type: Number, default: 0 }, // SHL Assessment score
});

module.exports = mongoose.model("StudentDetails", studentDetailsSchema);