import mongoose from "mongoose";
const {Schema,model} = mongoose;
const  UserSchema = new mongoose.Schema({
    email:{type:String , required:true},
    name:{type:String},
    username:{type:String ,required:true},
    profilePicture:{type:String},
    coverPicture:{type:String},
    stripeID:{type:String},
    stripeSecret:{type:String},
    createdAt:{type:Date ,default:Date.now},
    updatedAt:{type:Date ,default:Date.now},

})
const User = mongoose.models.User || model("User",UserSchema)
export default  User