const express = require('express');
const router = express.Router();
const nodeCron = require("node-cron");
// const { verifyToken } = require("../../utils/auth")

const successResponseGenerator = require("../../utils/helper/sendSuccessResponse");

const { registerEmployeeAdminController,
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
               } = require('../../controller/admin/index');

router.post('/LOGIN',   loginEmpOrAdmin, successResponseGenerator);
router.post('/REGISTER',   registerEmployeeAdminController, successResponseGenerator);
router.get('/GETALLEMPLOYEE',   getAllEmployeeAdminController, successResponseGenerator);
router.get('/GETEMPLOYEE/:id?', getEmployeeById, successResponseGenerator);
router.patch('/UPDATEEMPLOYEE/:id?', updateEmployee, successResponseGenerator);
router.delete('/DELETEEMPLOYEE/:id?', deleteEmployee, successResponseGenerator);
router.get('/SEARCHEMPLOYEE/:search?', searchEmployee, successResponseGenerator);
router.get('/ALL-LEAVE/', allEmployeeLeave, successResponseGenerator);
router.patch('/APPROVEEMPLEAVE/:id?', approveEmployeeLeave, successResponseGenerator);



router.get('/GETALLSTATUSBYTODAY', getAllStatusByToday, successResponseGenerator);
router.get('/FETCHALLSTATUSBYID/:id', fetchAllStatusById, successResponseGenerator);

//Holiday Routes

router.post('/ADDHOLIDAY', addHoliday, successResponseGenerator);
router.get('/GETHOLIDAY', getHoliday, successResponseGenerator);
router.get('/EMPLEAVEDETAIL/:id', getEmpLeaveDetail, successResponseGenerator);
router.get('/GETHOLIDAYBYID/:id', getHolidayById, successResponseGenerator);
router.patch('/UPDATEHOLIDAY/:id', updateHoliday, successResponseGenerator);
router.get('/DELETEHOLIDAY/:id', deleteHoliday, successResponseGenerator);
router.get('/EMPLOYEEWORKSTATUS', employeeWorkStatus, successResponseGenerator);
router.get('/GETEMPLOYEESTATUS/:id', getemployeeWorkStatus, successResponseGenerator);
router.get('/VIEWSTATUS/:id', viewEmptatus, successResponseGenerator);






module.exports = router;