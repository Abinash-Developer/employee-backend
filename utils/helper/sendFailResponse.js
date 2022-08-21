module.exports = (error, req, res) => {
    console.log(error)
    error.statusCode = error.statusCode || 500
    let response = {
        success: false,
        displayMessage: error.displayMessage || "Sorry! we could not process your request now",
        err_type: error.name,
        message: error.message,
        description: error.description,
        errorObj: error.errObj || {}
    }
    res.status(error.statusCode).send(response)
    return

}