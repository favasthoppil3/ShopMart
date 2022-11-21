const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const router=require('./admin/admin-route')
const routerUser=require('./user/user-router')
const routerCart=require('./cart/cart-router')
const routerOrder=require('./order/order-router')

const app = express()

app.use(cors({
    orgin:'http://localhost:4200'
}))


app.use(express.json())



app.use('/api/product',router)
app.use('/api/users',routerUser)
app.use('/api/cart',routerCart)
app.use('/api/order',routerOrder)

const mongoDb = "mongodb://127.0.0.1:27017/SHOPMART"

mongoose.connect(mongoDb, { useNewUrlParser: true })
    .then(() => app.listen(3000))
    .then(() =>
        console.log("Connected To Database and Listening To Localhost 3000")
    )
    .catch((err)=>console.log(err)) 