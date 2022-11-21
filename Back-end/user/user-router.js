const express=require('express')
const routerUser=express.Router();


const {getUser,signupUser,loginUser,removeUser,getByidUser}=require('./user-controll')

routerUser.get('/',getUser)
routerUser.post('/signup',signupUser)
routerUser.post('/login',loginUser)
routerUser.delete('/:id',removeUser)
routerUser.get('/getByidUser/:id',getByidUser)




module.exports=routerUser