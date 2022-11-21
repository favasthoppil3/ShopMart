const mongoose=require('mongoose')

const Cart=mongoose.model("Cart",{
    name:{
        type:String,
        
    },
    image:{
        type:String,
        
    },
    price:{
        type:String,
        
    }
    // ,
    // user:{
    //     type:String,
    //     ref:"User",
    //     required:true
    // }
})
module.exports=Cart