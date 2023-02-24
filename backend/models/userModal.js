const mongoose=require("mongoose")

const Schema= mongoose.Schema

const UserSchema = new Schema({
  
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        trim:true
    },},
    {
        timestamps:true,
    
})

const User = mongoose.model("User",UserSchema)

module.exports = User


