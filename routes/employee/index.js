const express = require('express');
const router = express.Router();
// const { verifyToken } = require("../../utils/auth")

const successResponseGenerator = require("../../utils/helper/sendSuccessResponse");

const { employeeLeaveApply, employeeAddStatus, employeeAllStatus, getEmployeeStatus,updateEmployeeStatus,deleteEmployeeStatus, getApplyLeave, getLeaveForEdit, updateLeave, punchInEmployee, punchStatusEmployee, punchStatusUpdate,workStatusEmployee} = require('../../controller/employee/index');

router.post('/PUNCHIN', punchInEmployee, successResponseGenerator);
router.get('/PUNCHSTATUS/:id', punchStatusEmployee, successResponseGenerator);
router.get('/UPDATEPUNCHSTATUS/:id', punchStatusUpdate, successResponseGenerator);
router.get('/EMPLOYEEWORKSTATUS/:id', workStatusEmployee, successResponseGenerator);
router.post('/LEAVEAPPLY', employeeLeaveApply, successResponseGenerator);
router.post('/ADDSTATUS', employeeAddStatus, successResponseGenerator);
router.get('/ALLSTATUS', employeeAllStatus, successResponseGenerator);
router.get('/GETEMPSTATUS/:id', getEmployeeStatus, successResponseGenerator);
router.patch('/UPDATESTATUS/:id', updateEmployeeStatus, successResponseGenerator);
router.delete('/DELETESTATUS/:id', deleteEmployeeStatus, successResponseGenerator);
router.get('/GETAPPLYLEAVE/:id',getApplyLeave, successResponseGenerator);
router.get('/GETLEAVEFOREDIT/:id',getLeaveForEdit, successResponseGenerator);
router.patch('/UPDATELEVE/:id', updateLeave, successResponseGenerator);


//APPLY LEAVE BY THE EMPLOYEE
// router.get('/GETAPPLIEDLEAVE/:id',getAppliedLeave, successResponseGenerator);




module.exports = router;