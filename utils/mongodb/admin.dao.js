const {decryptText} = require('../helper/bcryptText');
const AdminModel = require('./model/admin.model');
const LeaveModel = require('./model/leave.model');
const EmployeeStatus = require('./model/empStatus.model');
const HolidayModel = require('./model/holiday.model');
const WorkStatus = require('./model/workingstatus.model');
const Attendance = require('./model/attend.model');
const {emailSend} = require('../mongodb/mail');
const saveAdmin = async (data) => {
        try{
            
            let isUserExist = await AdminModel.find({"username":data.username});
            if(isUserExist.length == 0){
                let adminData = new AdminModel(data);
                return adminData.save();
            }else{
                return {"exist":"User already exist"};
            }
        }catch(error){
            throw error
        }
    
}
const getEmployee = async (data) => {
    try{
        let employeeData = AdminModel.find({$and:[{'is_delete':false},{user_type:"2"}]}).sort({_id:-1});
        return employeeData;
    }catch(error){
        throw error;
    }
}
const getEmployeeById = async (id) => {
    try{
       let employeeById =  AdminModel.find({'_id': id});
       return employeeById;
    }catch(error){
        throw error;
    }
}

const UpdateEmployee = async (id,empData) =>{
    try{
    const updateEmployeeResult = AdminModel.findByIdAndUpdate(id, empData, {new: true}).exec();
    return updateEmployeeResult; 
    }catch(error){
        throw error;
    }
}
const deleteEmployee = async (id) => {
    try{
    const deleteEmployeeResult = AdminModel.updateOne({ '_id':id },{$set: {"is_delete": true}});
    return deleteEmployeeResult;
    }catch(error){
        throw error;
    }
}
const searchEmployee = async (search) =>{
    try{
       const searchEmployeeResult = AdminModel.find({$text:{$search: search}});
       return searchEmployeeResult;
    }catch(error){
        throw error;
    }

   
}
const allEmployeeLeaveModel = async () => {
    try{
        const allEmployeeResult = LeaveModel.find().populate("userId").sort({createdAt:-1});
        return allEmployeeResult;
    }catch(error){
        throw error;
    }
}
const approveEmployeeLeaveModel = async (id) =>{
    try{    
        const approveEmployeeLeaveResult = LeaveModel.updateOne({ '_id':id },{$set: {"leave_status": 0}});
        emailSend('abinashswain45678@gmail.com');
        return approveEmployeeLeaveResult;
    }catch(error){
        throw error;
    }
}

const getAllStatusToday = async () => {
    try{
        let date = new Date();
        let today_date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        const approveEmployeeLeaveResult = EmployeeStatus.find({'today_date':today_date}).populate('userId');
        return approveEmployeeLeaveResult;
    }catch(error){
        throw error;
    }
}

const fetchResultById =async (id) => {
    try{
      const fetchResult = EmployeeStatus.find({'userId':id}).populate('userId');
      return fetchResult;
    }catch(error){
        throw error;
    }
}
const loginEmpOrAdminModel = async (userLoginData) => {
    try{
       const loginEmpOrAdminResult = await AdminModel.find({"username":userLoginData.username});
       insertAttendance();
      if(loginEmpOrAdminResult.length != 0){
      const isPasswordCompared = await decryptText(userLoginData.password, loginEmpOrAdminResult[0].password);
        if(isPasswordCompared == true){
            return loginEmpOrAdminResult;
        }else{
            return {error:"user not exist"};     
        }
      }else{
        return {error:"user not exist"};
      }
    }catch(error){
       throw error;
    }
}

const addHolidayAdminModel = async (holidayData) => {
    try{
      let holidayResult = new HolidayModel(holidayData);
      let result = holidayResult.save();
      return result ;
    }catch(error){
        throw error;
    }
}

const getHolidayAdminModel = async () => {
    try{
        let getholidayResult = await HolidayModel.find().sort({holiday_date:-1});
        return getholidayResult ;
      }catch(error){
          throw error;
      }
}

const getEmpLeaveDetailModel = async (id) =>{
    try{
        let getEmpLeaveDetailResult = await LeaveModel.find({_id:id}).populate('userId');
        return getEmpLeaveDetailResult ;
      }catch(error){
          throw error;
      }
}
const getHolidayByIdModel =  async (id) =>{
    try{
        let getHolidayByIdResult = await HolidayModel.find({_id:id});
        return getHolidayByIdResult ;
      }catch(error){
          throw error;
      }
}

const updateHolidayModel =  async (holidayData,id) =>{
    try{
        let updateHolidayResult = await HolidayModel.findByIdAndUpdate(
            id,
            holidayData,
            { new: true }
          ).exec();
        return updateHolidayResult ;
      }catch(error){
          throw error;
      }
}

const deleteHolidayModel = async (id) =>{
    try{
     let deleteHoliday = await HolidayModel.deleteOne({_id:id});
     return deleteHoliday;
    }catch(error){
        throw error;
    }
}

const employeeWorkStatusModel = async () =>{
    try{
     let workStatus = await WorkStatus.find({punch_date:new Date().toISOString().slice(0, 10)}).populate("userId");
     return workStatus;
    }catch(error){
        throw error;
    }
}


const insertAttendance = async () =>{
    let abc = await Attendance.remove({punch_date:new Date().toISOString().slice(0, 10)});  
        let isAttend = await Attendance.find({punch_date:new Date().toISOString().slice(0, 10)});
        if(isAttend.length ==0 ){
            let users = await AdminModel.find({$and:[{'is_delete':false},{user_type:"2"}]});
            users.forEach(async (data) => {
                let checkPresent =  await  WorkStatus.find({$and:[{userId:data._id},{punch_date:new Date().toISOString().slice(0, 10)}]});
                if(checkPresent.length == 0){
                    userCheckObj = {userId:data._id,name:data.names,punch_date:new Date().toISOString().slice(0, 10)};
                    let insertCheckData = new Attendance(userCheckObj);
                       insertCheckData.save();
                }

            });
        }
} 


const getemployeeWorkStatusModel = async (id) =>{
    try{
      let getEmployeeWorkStatus = await WorkStatus.find({userId:id}).populate("userId");
      return getEmployeeWorkStatus;
    }catch(error){
        throw error;
    }
}
const viewEmployeeWorkStatusModel = async (id) =>{
    try{
      let viewEmployeeWorkStatus = await EmployeeStatus.find({_id:id}).populate("userId");
      return viewEmployeeWorkStatus;
    }catch(error){
        throw error;
    }
}


module.exports = { saveAdmin ,getEmployee, getEmployeeById,UpdateEmployee,deleteEmployee,searchEmployee,allEmployeeLeaveModel,approveEmployeeLeaveModel,getAllStatusToday, fetchResultById , loginEmpOrAdminModel , addHolidayAdminModel, getHolidayAdminModel, getEmpLeaveDetailModel , getHolidayByIdModel, updateHolidayModel, deleteHolidayModel, employeeWorkStatusModel, getemployeeWorkStatusModel,viewEmployeeWorkStatusModel}