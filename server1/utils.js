function sendSuccess(data){
    return {
        status:'success',
        data:data
    }
}

function sendError(error){
    return {
        status:'error',
        data:error
    }
}



function sendResult(error,data){
    if(error){
        return sendError(error)
    }
    else
    {
        return sendSuccess(data)
    }
}

module.exports={
    sendError:sendError,
    sendResult:sendResult,
    sendSuccess:sendSuccess
}