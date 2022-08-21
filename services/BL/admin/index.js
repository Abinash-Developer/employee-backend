const { registerEmployeeAdminDal,
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
       } = require('../../DAL/admin/index');
const sendFailResponse = require('../../../utils/helper/sendFailResponse');


const registerEmployeeAdminBL = async (req, res) => {
    try {
        let saveUser = await registerEmployeeAdminDal(req.body);
        res.locals.rootData = saveUser;
    } catch (error) {
        throw error;
    }
}
const getAllEmployeeAdminBL = async (req, res) => {
    try{
        let allUser = await getAllEmployeeDal(req.body);
        res.locals.rootData = allUser;
    }catch(error){
        throw error;
    }
}
const getEmployeeByIdBL = async (req, res) => {
    try{
        const getEmployeeById = await getEmployeeByIdDal (req.params.id);
        res.locals.rootData = getEmployeeById;
    }catch(error){
        throw error;
    }
}
const updateEmployeeBL = async (req, res) => {
    try{
        
      const updateEmployee = await updateEmployeeDal (req.params.id , req.body);
      res.locals.rootData = updateEmployee;
    }catch(error){
        throw error;
    }
}
const deleteEmployeeBL = async (req, res) => {
    try{
       const deleteEmployee = await deleteEmployeeDal (req.params.id);
       res.locals.rootData = deleteEmployee;
    }catch(error){
        throw error;
    }
}
const searchEmployeeBL = async (req, res) =>{
    try{
        const searchEmployee = await searchEmployeeDal (req.params.search);
        res.locals.rootData = searchEmployee;
    }catch(error){
        throw error;
    }
}
const allEmployeeLeaveBL = async (req, res) => {
    try{
        const allEmployeeLeave = await allEmployeeLeaveDal();
        res.locals.rootData = allEmployeeLeave;
    }catch(error){
        throw error;
    }
}
const approveEmployeeLeaveBL = async (req, res) => {
    try{
        const allEmployeeLeave = await approveEmployeeLeaveDal(req.params.id);
        res.locals.rootData = allEmployeeLeave;
    }catch(error){
        throw error;
    }   
}

const getAllStatusByTodayBL = async (req , res) =>{
    try{
        const getAllStatusByToday = await getAllStatusByTodayDal();
        res.locals.rootData = getAllStatusByToday;
    }catch(error){
        throw error;
    }
}

const fetchAllStatusByIdBL = async (req, res) => {
    try{
        const fetchAllStatusById = await fetchAllStatusByIdDal(req.params.id);
        res.locals.rootData = fetchAllStatusById;
    }catch(error){
       throw error;
    }
}

const loginEmpOrAdminBL = async (req, res) => {
    try{
        const loginEmpOrAdminResult = await loginEmpOrAdminDal(req.body);
        res.locals.rootData = loginEmpOrAdminResult;
    }catch(error){
       throw error;
    }
}

module.exports = {
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
    loginEmpOrAdminBL
    
}
  
