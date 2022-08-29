const EmployeeLeaveModel = require("./model/leave.model");
const EmployeeStatusModel = require("./model/empStatus.model");
const WorkingStatusModel = require("./model/workingstatus.model");
const Attendance = require('./model/attend.model');
var moment = require("moment");

const saveEmployeeLeave = async (data) => {
  try {
    let employeeLeaveData = new EmployeeLeaveModel(data);
    return employeeLeaveData.save();
  } catch (error) {
    throw error;
  }
};
const addEmployeeStatus = async (data) => {
  try {
    // today_date
    let checkTodayStatusAdded = await EmployeeStatusModel.find({$and:[{userId:data.userId},{today_date:data.today_date}]});
    if(checkTodayStatusAdded.length > 0){
       return {"exist":"Already status added"};
    }else{
    let employeeLeaveData = new EmployeeStatusModel(data);
    return employeeLeaveData.save();
    }

  } catch (error) {
    throw error;
  }
};
const allEmployeeStatus = async (id) => {
  try {
    let employeeStatusData = await EmployeeStatusModel.find({userId:id}).populate("userId").sort({createdAt:-1});
    return employeeStatusData;
  } catch (error) {
    throw error;
  }
};
const getEMployeeStatusById = async (id) => {
  try {
    let getEmployeeStatusById = EmployeeStatusModel.find({ _id: id }).populate(
      "userId"
    );
    return getEmployeeStatusById;
  } catch (error) {
    throw error;
  }
};

const updateEMployeeStatusById = async (empData, id) => {
  try {
    let updateEmployeeStatusById = EmployeeStatusModel.findByIdAndUpdate(
      id,
      empData,
      { new: true }
    ).exec();
    return updateEmployeeStatusById;
  } catch (error) {
    throw error;
  }
};
const deleteEMployeeStatusById = async (id) => {
  try {
    let deleteEmployeeStatusById = EmployeeStatusModel.findByIdAndRemove({
      _id: id,
    });
    return deleteEmployeeStatusById;
  } catch (error) {
    throw error;
  }
};

const getAppliyLeaveById = async (id) => {
  try {
    let getAllLeaveByEmpId = EmployeeLeaveModel.find({ userId: id }).populate(
      "userId"
    ).sort({createdAt:-1});
    return getAllLeaveByEmpId;
  } catch (error) {
    throw error;
  }
};

const getLeaveForEditById = async (id) => {
  try {
    let getLeaveForEditByEmpId = EmployeeLeaveModel.find({ _id: id }).populate(
      "userId"
    );
    return getLeaveForEditByEmpId;
  } catch (error) {
    throw error;
  }
};

const updateLeaveForEditById = async (leaveData, id) => {
  try {
    let getLeaveForEditByEmpId = EmployeeLeaveModel.findByIdAndUpdate(
      id,
      leaveData,
      { new: true }
    ).exec();
    return getLeaveForEditByEmpId;
  } catch (error) {
    throw error;
  }
};

const punchInModel = async (reqBody) =>{
    try{
      let res = await Attendance.find({$and:[{userId:reqBody.userId},{punch_date:reqBody.punch_date}]});
      if(res.length != 0){
         await Attendance.deleteOne({$and:[{userId:reqBody.userId},{punch_date:reqBody.punch_date}]});
      }
      let checkTodayPuchin = await WorkingStatusModel.find({$and:[{userId:reqBody.userId},{punch_date:reqBody.punch_date}]});
      if(checkTodayPuchin.length == 0){
              let punchInTimae = new WorkingStatusModel(reqBody);
              return punchInTimae.save();
      }else{
        return {"exist": 1};
      }
    }catch(error){
        throw error;
    }
}

const punchStatusModel = async (id) =>{
  try{
    let punchStatus = await WorkingStatusModel.find({$and: [{userId: id},{punch_date: new Date().toISOString().slice(0, 10)}]})
    return punchStatus;
  }catch(error){
        throw error;
    }
}
const punchStatusUpdateModel = async (reqBody) =>{
  try{
      let updateEmployeeStatusByOne =   await  WorkingStatusModel.updateOne(
        { "_id": reqBody.id}, 
        { $set: { "punch_status": 1 , "end_time":reqBody.end_time}}
    );
          return updateEmployeeStatusByOne;
  }catch(error){
        throw error;
    }
}

const employeeWorkStatusModel = async (id) =>{
  try{
    let employeeWorkStatus = await WorkingStatusModel.find({userId: id}).populate('userId').sort({punch_date:-1});
    return employeeWorkStatus;
  }catch(error){
        throw error;
  }
}

const getAbsentDayModel = async (id) =>{
  try{
     let getAbsentDays = await Attendance.find({userId:id}).sort({createdAt:-1});
     return getAbsentDays;
  }catch(error){
     throw error;
  }
}
  module.exports = {
  saveEmployeeLeave,
  addEmployeeStatus,
  allEmployeeStatus,
  getEMployeeStatusById,
  updateEMployeeStatusById,
  deleteEMployeeStatusById,
  getAppliyLeaveById,
  getLeaveForEditById,
  updateLeaveForEditById,
  punchInModel,
  punchStatusModel,
  punchStatusUpdateModel,
  employeeWorkStatusModel,
  getAbsentDayModel
};
