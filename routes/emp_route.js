const express = require("express");
const Employee = require("../models/emp_model.js");
const router = express.Router();
const {findAllEmp,addEmp, findByIdEmp, updateEmp, deleteEmp} = require('../controllers/emp_controller.js');


router.post('/', addEmp) //add Emp


router.get('/', findAllEmp); // find all employee


router.get("/:id", findByIdEmp); // find by ID employee


router.put("/:id", updateEmp);   // update a employee


router.delete("/:id", deleteEmp);  // delete a employee




module.exports = router;