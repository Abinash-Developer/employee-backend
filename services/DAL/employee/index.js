const employeeDao = require('../../../utils/mongodb/employee.dao');
const { MongoError } = require('../../../utils/handler/error');

const leaveApplyEmployeeDal = async (reqBody) => {
    try {
        let result = await employeeDao.saveEmployeeLeave(reqBody);
        let leavedata = JSON.parse(JSON.stringify(result));
        return leavedata;
    } catch (error) {
        throw new MongoError(error);
    }
}


const employeeAddStatusDal = async (reqBody) => {
  try {
    let result = await employeeDao.addEmployeeStatus(reqBody);
    let addStatusData = JSON.parse(JSON.stringify(result));
    return addStatusData;
  } catch (error) {
      throw new MongoError(error);
  }
}
const employeeAllStatusDal = async (id) => {
      try {
        let result = await employeeDao.allEmployeeStatus(id);
        // let addStatusData = JSON.parse(JSON.stringify(result));
        return result;
      } catch (error) {
          throw new MongoError(error);
      }
}

const getEmployeeStatusDal = async (id) =>{
  try{
    let result = await employeeDao.getEMployeeStatusById(id);
    let getEmployeeStatus = JSON.parse(JSON.stringify(result));
    return getEmployeeStatus;
  }catch(error){
    throw new MongoError(error);
  }

}
const updaeEmployeeStatusDal = async (reqBody, id) =>{
  try{
    let result = await employeeDao.updateEMployeeStatusById(reqBody,id);
    let updateEmployeeStatus = JSON.parse(JSON.stringify(result));
    return updateEmployeeStatus;
  }catch(error){
    throw new MongoError(error);
  }
}

const deleteEmployeeStatusDal = async (id)=>{
  try{
    let result = await employeeDao.deleteEMployeeStatusById(id);
    let deleteEmployeeStatus = JSON.parse(JSON.stringify(result));
    return deleteEmployeeStatus;
  }catch(error){
    throw new MongoError(error);
  }
}

const getApplyLeaveDal = async (id) => {
      try{
        let getApplyLeave = await employeeDao.getAppliyLeaveById(id);
        return getApplyLeave;
      }catch(error){
        throw new MongoError(error);
      }
}


const getLeaveForEditDal = async (id) =>{
  try{
    let getLeaveForEdit = await employeeDao.getLeaveForEditById(id);
    return getLeaveForEdit;
  }catch(error){
    throw new MongoError(error);
  }
}
const updateLeaveForEditDal = async (reqBody , id) => {
  try{
    let updateLeaveForEdit = await employeeDao.updateLeaveForEditById(reqBody, id);
    return updateLeaveForEdit;
   }catch(error){ 
    throw new MongoError(error);
   }
}

const punchInEmpDal = async (reqBody) => {
  try{
    let pnchInres = await employeeDao.punchInModel(reqBody);
    return pnchInres;
  }catch(error){
    throw new MongoError(error);
  }
}

const punchStatusEmpDal = async (id) => {
  try{
    let punchStatusRes = await employeeDao.punchStatusModel(id);
    return punchStatusRes;
  }catch(error){
    throw new MongoError(error);
  }
}
const punchStatusUpdateDal = async (reqBody) =>{
  try{
    let punchStatusUpdateRes = await employeeDao.punchStatusUpdateModel(reqBody);
    return punchStatusUpdateRes;
  }catch(error){
    throw new MongoError(error);
  }
}
const employeeWorkStatusDal = async (id) =>{
  try{
    let employeeWorkStatusRes = await employeeDao.employeeWorkStatusModel(id);
    return employeeWorkStatusRes;
  }catch(error){
    throw new MongoError(error);
  }
}

const getAbsentDayDal = async (id) =>{
  try{
    let getAbsentDayRes = await employeeDao.getAbsentDayModel(id);
    return getAbsentDayRes;
  }catch(error){
    throw new MongoError(error);
  }
}

  module.exports = {
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
    employeeWorkStatusDal,
    getAbsentDayDal
  
  };