module.exports = (req, res) => {
    let msg = "Response generated successfully";
    if (!res.locals.rootData) {
        msg = "rootData not set";
    } else {
        if (res.locals.message) {
            msg = res.locals.message;
        }
    }
    const response = {
        success: true,
        displayMessage: res.locals.displayMessage || "",
        message: msg,
        description: "NAX-0000",
        resultObj: res.locals.rootData || {}
    }

    res.send(response)
}