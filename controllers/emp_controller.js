const Employee = require("../models/emp_model.js");


const addEmp = async (req, res) => {
  try {
    const emp = await Employee.create(req.body);
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAllEmp = async (req, res) => {
  try {
    const emp = await Employee.find({});
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findByIdEmp = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await Employee.findById(id);
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const updateEmp = async (req, res) => {
  try {
    const { id } = req.params;

    const emp = await Employee.findByIdAndUpdate(id, req.body);

    if (!emp) {
      return res.status(404).json({ message: "emp not found" });
    }

    const updatedEmp = await Employee.findById(id);
    res.status(200).json(updatedeEmp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmp = async (req, res) => {
  try {
    const { id } = req.params;

    const emp = await Employee.findByIdAndDelete(id);

    if (!emp) {
      return res.status(404).json({ message: "emp not found" });
    }

    res.status(200).json({ message: "emp deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllEmp,
  addEmp,
  findByIdEmp,
  updateEmp,
  deleteEmp,
};
