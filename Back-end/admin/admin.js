const mongoose = require('mongoose')

const Product = mongoose.model("Product", {
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    offer_price: {
        type: String,
        required: true
    },P2_image: {
        type: String,
        required: true
    },
    P3_image: {
        type: String,
        required: true
    },
    P4_image: {
        type: String,
        required: true
    },
    P5_image: {
        type: String,
        required: true
    },
    storage: {
        type: String,
    },
    color: {
        type: String,
        required: true
    },
    ram: {
        type: String,
    },
    D_size: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    P_cam: {
        type: String,
        required: true
    },
    S_cam: {
        type: String,
        required: true
    },
    battery: {
        type: String,
        required: true
    },
    charger: {
        type: String,
        required: true
    },
    // user:{
    //     type:mongoose.Types.ObjectId,
    //     ref:"User",
    //     required:true
    // }

})
// const LogAdmin = mongoose.model("LogAdmin",{
//     email:{
//         type:String,
//         ref:"admin" 
//     }
// })
module.exports = Product