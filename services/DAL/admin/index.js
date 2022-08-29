const adminDao = require('../../../utils/mongodb/admin.dao');
const { MongoError } = require('../../../utils/handler/error');

const registerEmployeeAdminDal = async (reqBody) => {
    try {
         
        let result = await adminDao.saveAdmin(reqBody);
        let userdata = JSON.parse(JSON.stringify(result));
        delete userdata.password;
        return userdata;
    } catch (error) {
        throw new MongoError(error);
    }
}
const getAllEmployeeDal = async (reqBody) => {
  try{
      let getAllEmployee = await adminDao.getEmployee(reqBody);
      return getAllEmployee;
  }catch(error){
     throw error;
  }
}
const getEmployeeByIdDal = async (id) =>{
    try{
        const getEmploeeById = await adminDao.getEmployeeById(id);
        return getEmploeeById;
    }catch(error){
      throw error; 
    }
}
const updateEmployeeDal = async (id, reqBody) => {
  try{
     const updateEmployeeRes = await adminDao.UpdateEmployee(id,reqBody);
     return updateEmployeeRes;
  }catch(error){
    throw error;
  }
}
  const deleteEmployeeDal = async (id) => {
    try{
     const deleteEmployeeRes = await adminDao.deleteEmployee(id);
     return deleteEmployeeRes;
    }catch(error){
      throw error;
    }
  }
  const searchEmployeeDal = async (search) =>{
    try{
     const searchEmployeeRes = await adminDao.searchEmployee(search);
     return searchEmployeeRes;
    }catch(error){
      throw error;
    }
  }
  const allEmployeeLeaveDal = async () =>{
    try{
      const allEmployeeLeave = await adminDao.allEmployeeLeaveModel();
      return allEmployeeLeave;
    }catch(error){
      throw error;
    }
  }
  const approveEmployeeLeaveDal = async (id) => {
    try{
      const approveEmployeeLeave = await adminDao.approveEmployeeLeaveModel(id);
      return approveEmployeeLeave;
    }catch(error){
      throw error;
    }
  }

  const getAllStatusByTodayDal = async () => {
    try{
      const getAllStatusToday = await adminDao.getAllStatusToday();
      return getAllStatusToday;
    }catch(error){
      throw error;
    }
  }
  const fetchAllStatusByIdDal = async (id) => {
    try{
      const fetchResult = await adminDao.fetchResultById(id);
      return fetchResult;
    }catch(error){
      throw error;
    }
  }
  const loginEmpOrAdminDal = async (reqBody) => {
      try{
        const loginEmpOrAdmin = await adminDao.loginEmpOrAdminModel(reqBody);
        return loginEmpOrAdmin;
      }catch(error){
       throw error;
      }
  }

  const addHolidayAdminDal = async (reqBody) => {
    try{
      const addHolidayAdmin = await adminDao.addHolidayAdminModel(reqBody);
      return addHolidayAdmin;
    }catch(error){
     throw error;
    }
  }
const getHolidayAdminDal = async () =>{
  try{
    const getHolidayAdmin = await adminDao.getHolidayAdminModel();
    return getHolidayAdmin;
  }catch(error){
   throw error;
  }
}
const getEmpLeaveDetailDal = async (id) =>{
  try{
    const getEmpLeaveDetail = await adminDao.getEmpLeaveDetailModel(id);
    return getEmpLeaveDetail;
  }catch(error){
   throw error;
  }
}

const getHolidayByIdDal = async (id) =>{
  try{
    const getHolidayById = await adminDao.getHolidayByIdModel(id);
    return getHolidayById;
  }catch(error){
   throw error;
  }
}
const updateHolidayDal = async (reqBody,id) => {
  try{
    const updateHoliday = await adminDao.updateHolidayModel(reqBody,id);
    return updateHoliday;
  }catch(error){
   throw error;
  }
}
const deleteHolidayDal = async (id) => {
  try{
    const deleteHoliday = await adminDao.deleteHolidayModel(id);
    return deleteHoliday;
  }catch(error){
   throw error;
  }
}

const employeeWorkStatusDal = async () => {
  try{
    const employeeWorkStatus = await adminDao.employeeWorkStatusModel();
    return employeeWorkStatus;
  }catch(error){
   throw error;
  }
}
const getemployeeWorkStatusDal = async (id) => {
  try{
    const getemployeeWorkStatus = await adminDao.getemployeeWorkStatusModel(id);
    return getemployeeWorkStatus;
  }catch(error){
   throw error;
  }
}
const viewEmployeeWorkStatusDal = async (id) => {
  try{
    const viewEmployeeWorkStatus = await adminDao.viewEmployeeWorkStatusModel(id);
    return viewEmployeeWorkStatus;
  }catch(error){
   throw error;
  }
}

  module.exports = {
    registerEmployeeAdminDal,
    getAllEmployeeDal,
    getEmployeeByIdDal,
    updateEmployeeDal,
    deleteEmployeeDal,
    searchEmployeeDal,
    allEmployeeLeaveDal,
    approveEmployeeLeaveDal,
    getAllStatusByTodayDal,
    fetchAllStatusByIdDal,
    loginEmpOrAdminDal,
    addHolidayAdminDal,
    getHolidayAdminDal,
    getEmpLeaveDetailDal,
    getHolidayByIdDal,
    updateHolidayDal,
    deleteHolidayDal,
    employeeWorkStatusDal,
    getemployeeWorkStatusDal,
    viewEmployeeWorkStatusDal
  };