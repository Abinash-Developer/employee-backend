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
    loginEmpOrAdminDal
  };