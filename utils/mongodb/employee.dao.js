const EmployeeLeaveModel = require("./model/leave.model");
const EmployeeStatusModel = require("./model/empStatus.model");
const WorkingStatusModel = require("./model/workingstatus.model");

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
    let employeeLeaveData = new EmployeeStatusModel(data);
    return employeeLeaveData.save();
  } catch (error) {
    throw error;
  }
};
const allEmployeeStatus = async () => {
  try {
    let employeeStatusData = EmployeeStatusModel.find().populate("userId");
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
      let punchInTimae = new WorkingStatusModel(reqBody);
      return punchInTimae.save();
    }catch(error){
        throw error;
    }
}

const punchStatusModel = async (id) =>{
  try{
    let date = new Date();
    let punch_dat =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let punchStatus = await WorkingStatusModel.find({$and: [{userId: id},{punch_date: punch_dat}]})
    return punchStatus;
  }catch(error){
        throw error;
    }
}
const punchStatusUpdateModel = async (id) =>{
  try{
    const DateTime = new Date();
  //   let userExist = await WorkingStatusModel.find({"userId":id});
  //  if(userExist.length != 0){
  //   let isAvailablePunch = await WorkingStatusModel.find({$and: [{userId: id},{punch_date: "2022-08-11"}]}) ;
  //   const [availablePunch] = isAvailablePunch;
  //   if(availablePunch.punch_status == 1){
  //     let updateEmployeeStatusByOne =   await  WorkingStatusModel.updateOne(
  //       { "userId": id}, 
  //       { $set: { "punch_status": 0 , "end_time":DateTime.getTime()}}
  //   );
  //   return updateEmployeeStatusByOne;
  //    }else{
  //     let updateEmployeeStatusByTwo =   await  WorkingStatusModel.updateOne(
  //       { "userId":id }, 
  //       { $set: { "punch_status": 1 } }
  //      );
  //     return  updateEmployeeStatusByTwo;
  //    }
  //  }else{
  //   let punchInTimae = new WorkingStatusModel({userId:id});
  //   return punchInTimae.save();   
  //  }
      let updateEmployeeStatusByOne =   await  WorkingStatusModel.updateOne(
        { "userId": id}, 
        { $set: { "punch_status": 1 , "end_time":DateTime.getTime()}}
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
  employeeWorkStatusModel
};
