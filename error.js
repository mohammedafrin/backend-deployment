class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode;
    }
}
export const errorMiddleWare=(err,req,res,next)=>{
err.message=err.message|| "internal server error";
err.statuscode=err.statuscode|| 500
return res.status(err.statuscode).json({
    sucess:false,
    message:err.message
})
}
export default ErrorHandler;