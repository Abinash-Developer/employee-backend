
const sendFailResponse = require('../../utils/helper/sendFailResponse');
const {
    leaveApplyByEmployeeBL,
    employeeAddStatusBL,
    employeeAllStatusBL,
    getEmployeeStatusBL,
    updateEmployeeStatusBL,
    deleteEmployeeStatusBL,
    getApplyLeaveBL,
    getLeaveForEditBL,
    UpdateLeaveBL,
    punchInEmpBL,
    punchStatusEmpBL,
    punchStatusUpdateBL,
    employeeWorkStatusBL,
    getAbsentDayBL
    
  } = require("../../services/BL/employee/index");

const employeeLeaveApply = async (req, res, next) => {
    
    try {
        await leaveApplyByEmployeeBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const employeeAddStatus = async (req, res, next) => {
    try {
        await employeeAddStatusBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}

const employeeAllStatus = async (req, res, next) =>{
    try {
        await employeeAllStatusBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const getEmployeeStatus = async (req, res, next)=>{
    try {
        await getEmployeeStatusBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const updateEmployeeStatus = async (req, res, next) =>{
    try {
        await updateEmployeeStatusBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const deleteEmployeeStatus = async (req, res, next) =>{
    try {
        await deleteEmployeeStatusBL(req, res);
        next();
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const getApplyLeave = async (req, res, next)=> {
    try{
        await getApplyLeaveBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const getLeaveForEdit = async (req, res, next) =>{
    try{
        await getLeaveForEditBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const updateLeave = async (req, res, next) =>{
    try{
        await UpdateLeaveBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const punchInEmployee = async (req, res, next) => {
    try{
        await punchInEmpBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}

const punchStatusEmployee = async (req, res, next) => {
    try{
        await punchStatusEmpBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const punchStatusUpdate = async (req, res, next) => {
    try{
        await punchStatusUpdateBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}

const workStatusEmployee = async (req, res, next) => {
    try{
        await employeeWorkStatusBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}

const getAbsentDay = async (req, res, next) =>{

    try{
        await getAbsentDayBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}

module.exports = {
    employeeLeaveApply,
    employeeAddStatus,
    employeeAllStatus,
    getEmployeeStatus,
    updateEmployeeStatus,
    deleteEmployeeStatus,
    getApplyLeave,
    getLeaveForEdit,
    updateLeave,
    punchInEmployee,
    punchStatusEmployee,
    punchStatusUpdate,
    workStatusEmployee,
    getAbsentDay
}