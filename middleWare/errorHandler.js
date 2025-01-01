const errorHandler = (err,req,res,next) => {
    let statusCode = res.statusCode ?? 500

    switch (statusCode) {
        case 400:
            res.json({
                title:"validation error",
                message:err.message
            })
            break;
        case 404:
            res.json({
                title:"Not found error",
                message:err.message
            })
            break;
        case 401:
            res.json({
                title:"unauthorized error",
                message:err.message
            })
            break;
        case 500:
            res.json({
                title:"server error",
                message:err.message
            })
            break;
        default:
           console.log("no error")
           break
    }
}

module.exports = {errorHandler}