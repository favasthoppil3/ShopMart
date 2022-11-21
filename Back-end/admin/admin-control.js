const Product = require('./admin')
const LogAdmin = require('./admin')
const User=require('../user/user')
const mongoose=require('mongoose')

const getproduct = async (req, res, next) => {
    let products;
    try {
        products = await Product.find();
    } catch (err) {
        return console.log(err)
    }
    if (!products) {
        return res.status(404).json({ message: 'No Prodect Found' })
    }
    return res.status(200).json({ products })
}

const addproduct = async (req, res, next) => {
    const { name, image, price, category ,offer_price,P2_image,P3_image,P4_image,P5_image,storage,color,ram,D_size,processor,description,P_cam,S_cam,battery,charger} = req.body;
    // let existUser;
    // try{
    //     existUser =await User.findById(user)
    // }catch(err){
    //     console.log(err)
    // }
    // if(!existUser){
    //     return res.status(404).json({message:"Unable To Find User Id"})
    // }
    const product = new Product({
        name,
        image,
        price,
        category,offer_price,P2_image,P3_image,P4_image,P5_image,storage,color,ram,D_size,processor,description,P_cam,S_cam,battery,charger
        // user
    })
    try {
       await product.save()
        // const session=await mongoose.startSession();
        // session.startTransaction();
        // await product.save({session})
        // existUser.products.push(product)
        // await existUser.save({session})
        // await session.commitTransaction()
    } catch (err) {
         console.log(err)
         return res.status(404).json({message:err})
    }
    return res.status(200).json({ product })

}

const updateProduct = async (req, res, next) => {
    const { name, image, price, category } = req.body
    const productId = req.params.id
    let products
    try {
        products = await Product.findByIdAndUpdate(productId,{
            name, 
            image, 
            price, 
            category
        })
    }catch(err){
        console.log(err)
    }
    if(!products){
        return res.status(500).json({message:'Unable To Update The Blog'})
    }
    return res.status(200).json(products)
}

const deleteProduct=async (req,res,next)=>{
    const id=req.params.id

    let products
    try{
        products =await Product.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!products){
        return res.status(404).json({message:"Unable To Delete"})
    }
    return res.status(200).json({products})
}

const getByidProduct=async (req,res,next)=>{
    const id=req.params.id;
    let product;
    try{
        product = await  Product.findById(id)
    }catch(err){
       return console.log(err)
    }if(!product){
        return res.status(404).json({message:"No Products"})
    }
    return res.status(200).json({product})


} 


// const loginAdmin=async(req,res,next)=>{
//     const {email,password}=req.body
//     let existUser
//     try{
//         existUser=await LogAdmin.findOne({email:(ref=='admin')})
//     }catch(err){
//         console.log(err)
//     }
//     if(!existUser){
//         return res.status(400).json({message:"Couldnt Find User By This Email"})
//     }
    
//     return res.status(201).json({message:"Login SuccessFully"})
// }

module.exports = { getproduct, addproduct ,updateProduct,deleteProduct,getByidProduct}

