import ErrorHandler from "../error.js";
import { reservations } from "../models/reservationSchema.js";
export const sendReservation=async(req,res,next)=>{
    const {firstName,lastName,email,phone,time,date}=req.body;
    if(!firstName||!lastName||!email||!phone||!time||!date)
    return next( new ErrorHandler("please fill all details",404))
    try{
        await reservations.create({firstName,lastName,email,phone,date,time})
    res.status(200).json({
        sucess:true,
        message:"Reservation Sucessfull"
    })
    }
    catch(error){
        if(error.name=="ValidationError"){
            const validationErrors=Object.values(error.errors).map(
                (err)=>err.message
            )
        return next(new ErrorHandler(validationErrors.join(","),400))
        }
        return next(error)
    }
}