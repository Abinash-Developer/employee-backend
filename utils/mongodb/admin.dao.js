const {decryptText} = require('../helper/bcryptText');
const AdminModel = require('./model/admin.model');
const LeaveModel = require('./model/leave.model');
const EmployeeStatus = require('./model/empStatus.model');
const {emailSend} = require('../mongodb/mail');
const saveAdmin = async (data) => {
        try{
            let adminData = new AdminModel(data);
            return adminData.save();
        }catch(error){
            throw error
        }
    
}
const getEmployee = async (data) => {
    try{
        let employeeData = AdminModel.find({'is_delete':false}).sort({_id:-1});
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
        // $or: [
        //     {
        //       name: { $regex: search, $options: "i" },
        //     },
        //     {
        //       username: { $regex: search, $options: "i" },
        //     },
        //     {                                      
        //         email: { $regex: search, $options: "i" },
        //     }
        //   ],
    //    });
       return searchEmployeeResult;
    }catch(error){
        throw error;
    }

   
}
const allEmployeeLeaveModel = async () => {
    try{
        const allEmployeeResult = LeaveModel.find().populate("userId");
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
      const [loginEmpOrAdminResult] = await AdminModel.find({"username":userLoginData.username});
      const isPasswordCompared = await decryptText(userLoginData.password, loginEmpOrAdminResult.password);
      if(isPasswordCompared){
        return loginEmpOrAdminResult;
      }
    }catch(error){
       throw error;
    }
}

module.exports = { saveAdmin ,getEmployee, getEmployeeById,UpdateEmployee,deleteEmployee,searchEmployee,allEmployeeLeaveModel,approveEmployeeLeaveModel,getAllStatusToday, fetchResultById , loginEmpOrAdminModel  }