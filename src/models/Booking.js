import mongoose from "mongoose";
const bookingSchema= new mongoose.Schema({
    dateSelected:{type:String, required:true},
    voteClass:{type:String, required:true},
    name:{type:String, required:true},
    content:{type:String, required:true},
    media:{type:String, required:true}
},{timestamps:true,});
const Booking=mongoose.models.Booking || mongoose.model('Booking',bookingSchema);
export default Booking;