const mongoose = require("mongoose");
const validator = require("validator");


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
         type:String,
         required:true,
         validate(value){
              if(!validator.isEmail(value)){
                  throw new Error("Invalid email id")
             }
          }
     },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})

    // we need  to create a collection

const User =new mongoose.model("User",userSchema)
module.exports = User;

