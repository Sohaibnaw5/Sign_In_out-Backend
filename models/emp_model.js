const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter employee name"],
    },

    job: {
      type: String,
      required: [true, "Please enter employee's Job title"]
    },

    salary: {
      type: Number,
      required: true,
      default: 0,
    },

    jobType: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;