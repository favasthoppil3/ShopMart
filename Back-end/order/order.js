const mongoose=require('mongoose')

const Orderaddress=mongoose.model("Orderaddress",{
    Fname:{
        type:String,
        required: true
    },
    Lname:{
        type:String,
        required: true
    },
    Email:{
        type:String,        
        required: true
    },
    Phone:{
        type:String,
        required: true
    },
    Address:{
        type:String,
        required: true
    },
    Landmark:{
        type:String,
        required: true
    },
    Pincode:{
        type:String,
        required: true
    }
    
})

const Order=mongoose.model("Order",{
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    Product_price:{
        type:String,
        required: true
    },
    Offer_price:{
        type:String,
        required: true
    },
    Shipping:{
        type:String,
        required: true
    },
    Payment:{
        type:String,    
        
    },
    Totalamount:{
        type:String,
        required: true
    },
    orderStatus:{
        type:String,
        required: true
    },


    address:{
        Fname:{
            type:String,
            required: true
        },
        Lname:{
            type:String,
            required: true
        },
        Email:{
            type:String,        
            required: true
        },
        Phone:{
            type:String,
            required: true
        },
        Address:{
            type:String,
            required: true
        },
        Landmark:{
            type:String,
            required: true
        },
        Pincode:{
            type:String,
            required: true
        }
    }


})


module.exports={Orderaddress,Order}