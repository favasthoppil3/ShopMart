const mongoose=require('mongoose')


const User=mongoose.model("User",{
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        default:'user'
    },
    carts:[{
        type:String,
        ref:"Cart",
        required:true
    }]
})

module.exports=User