const express = require("express");
const router = express.Router();

// router.use("/EMPLOYEE", require("./employee/index"));
router.use("/ADMIN", require("./admin/index"));
router.use("/EMPLOYEE",require("./employee/index"));

module.exports = router;
