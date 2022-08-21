const { 
    leaveApplyEmployeeDal,
    employeeAddStatusDal,
    getEmployeeStatusDal,
    updaeEmployeeStatusDal,
    deleteEmployeeStatusDal,
    employeeAllStatusDal,
    getApplyLeaveDal,
    getLeaveForEditDal,
    updateLeaveForEditDal,
    punchInEmpDal,
    punchStatusEmpDal,
    punchStatusUpdateDal,
    employeeWorkStatusDal
       } = require('../../DAL/employee/index');
const sendFailResponse = require('../../../utils/helper/sendFailResponse');


const leaveApplyByEmployeeBL = async (req, res) => {
    try {
        let saveUser = await leaveApplyEmployeeDal(req.body);
        res.locals.rootData = saveUser;
    } catch (error) {
        throw error;
    }
}
const employeeAddStatusBL = async (req, res) =>{
    try {
        let saveUser = await employeeAddStatusDal(req.body);
        res.locals.rootData = saveUser;
    } catch (error) {
        throw error;
    }
}
const employeeAllStatusBL = async (req, res) =>{
    try {
        let addEmpStatus = await employeeAllStatusDal(req.body);
        res.locals.rootData = addEmpStatus;
    } catch (error) {
        throw error;
    }
}

const getEmployeeStatusBL = async (req, res) =>{
    try {
        let getEmpStatus = await getEmployeeStatusDal(req.params.id);
        res.locals.rootData = getEmpStatus;
    } catch (error) {
        throw error;
    }
}

const updateEmployeeStatusBL = async (req, res) =>{
    try {
        let updateEmpStatus = await updaeEmployeeStatusDal(req.body,req.params.id);
        res.locals.rootData = updateEmpStatus;
    } catch (error) {
        throw error;
    }
}
const deleteEmployeeStatusBL = async (req, res) =>{
    try {
        let deleteEmpStatus = await deleteEmployeeStatusDal(req.params.id);
        res.locals.rootData = deleteEmpStatus;
    } catch (error) {
        throw error;
    }
}

const getApplyLeaveBL = async (req, res) =>{
    try{
       let getAppliyStatus = await getApplyLeaveDal(req.params.id);
       res.locals.rootData = getAppliyStatus;
    }catch(error){
        throw error;
    }
}

const getLeaveForEditBL = async (req, res) =>{
    try{
        let getLeaveEdit = await getLeaveForEditDal(req.params.id);
        res.locals.rootData = getLeaveEdit;
     }catch(error){
         throw error;
     }
}
const UpdateLeaveBL = async (req, res) =>{
    try{
        let updateLeaveEdit = await updateLeaveForEditDal(req.body , req.params.id);
        res.locals.rootData = updateLeaveEdit;
     }catch(error){
         throw error;
     }
}
const punchInEmpBL = async (req, res) =>{
    try{
        let punchInEmpRes = await punchInEmpDal(req.body );
        res.locals.rootData = punchInEmpRes;
     }catch(error){
         throw error;
     }
}

const punchStatusEmpBL = async (req, res) => {
    try{
        let punchStatusEmpRes = await punchStatusEmpDal(req.params.id);
        res.locals.rootData = punchStatusEmpRes;
     }catch(error){
         throw error;
     }
}
const punchStatusUpdateBL =async (req, res) =>{
    try{
        let punchStatusUpdateRes = await punchStatusUpdateDal(req.params.id);
        res.locals.rootData = punchStatusUpdateRes;
     }catch(error){
         throw error;
     }
}
const employeeWorkStatusBL = async (req, res) =>{
    try{
        let employeeWorkStatusRes = await employeeWorkStatusDal(req.params.id);
        res.locals.rootData = employeeWorkStatusRes;
     }catch(error){
         throw error;
     }
}

module.exports = {
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
    employeeWorkStatusBL
    
}
  
