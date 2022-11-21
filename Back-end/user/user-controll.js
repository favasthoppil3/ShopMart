const User=require('./user')


const getUser=async(req,res,next)=>{
    let users
    try{
        users=await User.find()
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message:'No User Found'})
    }
    return res.status(200).json({users})
}


const signupUser=async(req,res,next)=>{
    const {username,email,mobile,password}=req.body
    let existUser
    try{
        existUser=await User.findOne({"email":email})
    }catch(err){
        console.log(err)
    }
    if(existUser){
        return res.status(400).json({message:"User Already Exist"})
    }
    const user=new User({
        username,
        email,
        mobile,
        password,
        carts:[]
    })
    try{
        await user.save()
    }catch(err){
        console.log(err)
    }
    return res.status(201).json({user})
}



const loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    let existUser
    try{
        existUser=await User.findOne({"email":email,"password":password})
    }catch(err){
        console.log(err)
    }
    if(!existUser){
        return res.status(400).json({message:"Couldnt Find User By This Email"})
    }
    
    return res.status(201).json({existUser ,message:'success'})
}


const removeUser=async (req,res,next)=>{
    const id=req.params.id

    let user
    try{
        user =await User.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!user){
        return res.status(404).json({message:"Unable To Delete"})
    }
    return res.status(200).json({message:"Delete SuccessFully"})
}

const getByidUser=async (req,res,next)=>{
    const id=req.params.id;
    let userByid;
    try{
        userByid = await  User.findById(id)
    }catch(err){
       return console.log(err)
    }if(!userByid){
        return res.status(404).json({message:"No user"})
    }
    return res.status(200).json({userByid})


}

module.exports={getUser,signupUser,loginUser,removeUser,getByidUser}