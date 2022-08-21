const express = require('express');
const router = express.Router();
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
      loginEmpOrAdmin
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


module.exports = router;