const { body } = require('express-validator');

const execute = () => {
    return [
        body('username').exists().withMessage("username required"),
        body('password').exists().withMessage("Password required")
    ]
}

module.exports = { execute }