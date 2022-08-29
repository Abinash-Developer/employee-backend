
const sendFailResponse = require('../../utils/helper/sendFailResponse');
const {
    registerEmployeeAdminBL,
    getAllEmployeeAdminBL,
    getEmployeeByIdBL,
    updateEmployeeBL,
    deleteEmployeeBL,
    searchEmployeeBL,
    allEmployeeLeaveBL,
    approveEmployeeLeaveBL,
    getAllStatusByTodayBL,
    fetchAllStatusByIdBL,
    loginEmpOrAdminBL,
    addHolidayAdminBL,
    getHolidayAdminBL,
    getEmpLeaveDetailBL,
    getHolidayByIdBL,
    updateHolidaydBL,
    deleteHolidayBL,
    employeeWorkStatusBL,
    getemployeeWorkStatusBL,
    viewEmployeeWorkStatusBL
  
  } = require("../../services/BL/admin");

const registerEmployeeAdminController = async (req, res, next) => {
    
    try {
        await registerEmployeeAdminBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}
const getAllEmployeeAdminController = async (req, res, next) => {
    try{
       await getAllEmployeeAdminBL(req, res);
       next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const getEmployeeById = async (req, res, next) => {
    try{
       await getEmployeeByIdBL (req, res);
       next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const updateEmployee = async (req, res, next) => {
   try{
       await updateEmployeeBL (req, res);
       next();
   }catch(error){
      sendFailResponse(error, req, res);
   }
}
const deleteEmployee = async (req, res,next) =>{
    try{
        await deleteEmployeeBL (req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const searchEmployee = async (req, res, next) =>{
    try{
       await searchEmployeeBL(req, res);
       next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}
const allEmployeeLeave = async (req, res, next) => {
    try{
        await allEmployeeLeaveBL(req, res);
        next();
     }catch(error){
         sendFailResponse(error, req, res);
     }
}
const approveEmployeeLeave = async (req, res, next) => {
    try{
        await approveEmployeeLeaveBL(req, res);
        next();
     }catch(error){
         sendFailResponse(error, req, res);
     }
}

const getAllStatusByToday = async (req, res, next) =>{
    try{
        await getAllStatusByTodayBL(req, res);
        next();
    }catch(error){
        sendFailResponse(error, req, res);
    }
}

const fetchAllStatusById = async (req, res, next) => {
     try{
        await fetchAllStatusByIdBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}

const loginEmpOrAdmin = async (req, res, next) =>{
    try{
        await loginEmpOrAdminBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const addHoliday = async (req, res, next) =>{
    try{
        await addHolidayAdminBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const getHoliday = async (req, res, next) =>{
    try{
        await getHolidayAdminBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const getEmpLeaveDetail = async (req, res, next) =>{
    try{
        await getEmpLeaveDetailBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const getHolidayById = async (req, res, next) =>{
    try{
        await getHolidayByIdBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const updateHoliday = async (req, res, next) => {
    try{
        await updateHolidaydBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}

const deleteHoliday = async (req, res, next) => {
    try{
        await deleteHolidayBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const employeeWorkStatus = async (req, res, next) => {
    try{
        await employeeWorkStatusBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}

const getemployeeWorkStatus = async (req, res, next) => {
    try{
        await getemployeeWorkStatusBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}
const viewEmptatus = async (req, res, next) => {
    try{
        await viewEmployeeWorkStatusBL(req, res);
        next();
     }catch(error){
        sendFailResponse(error, req, res);
     }
}


module.exports = {
    registerEmployeeAdminController,
    getAllEmployeeAdminController,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee,
    allEmployeeLeave,
    approveEmployeeLeave,
    getAllStatusByToday,
    fetchAllStatusById,
    loginEmpOrAdmin,
    addHoliday,
    getHoliday,
    getEmpLeaveDetail,
    getHolidayById,
    updateHoliday,
    deleteHoliday,
    employeeWorkStatus,
    getemployeeWorkStatus,
    viewEmptatus,
}