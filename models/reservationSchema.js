import mongoose,{Schema} from "mongoose";
import validator from "validator";
const reservationSchema=new Schema({
firstName:{
    type:String,
    required:true,
    minLength:[3,"first name must contain min of 3 characters"],
    maxLength:[30,"first name cannot contain more than 30 chahracters"]
},
lastName:
{
    type:String,
    required:true,
    minLength:[3,"last name must contain min of 3 characters"],
    maxLength:[30,"last name cannot contain more than 30 chahracters"]
},
email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"provide a valid email"]
},
phone:{
    type:String,
    required:true,
    minLength:[10,"phone number must conatin 10 digits"],
    maxLength:[10,"phone number must contain 10 digits"]
},
time:
{
type:String,
required:true
},
date:{
    type:String,
    required:true
}
},{timestamps:true})
export const reservations=mongoose.model("reservation",reservationSchema)