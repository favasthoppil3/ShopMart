const {Order,Orderaddress} = require('./order')

// const placeOrder = async (req, res, next) => {
//     const { Fname, Lname, Email, Phone, Address, Landmark, Pincode } = req.body;
//     const orderaddress = new Orderaddress({
//         Fname,
//         Lname,
//         Email,
//         Phone,
//         Address,
//         Landmark,
//         Pincode
//     })
//     try {
//         orderaddress.save()

//     } catch (err) {
//         console.log(err)
//         return res.status(404).json({ message: err })
//     }
//     return res.status(200).json({ orderaddress })

// }

const orderNow = async (req, res, next) => {
    const {name, image, Product_price, Offer_price, Shipping, Payment, Totalamount,orderStatus,address:{Fname,Lname,Email,Phone,Address,Landmark,Pincode}} = req.body;
    const order = new Order({
        name,
        image,
        Product_price,
        Offer_price,
        Shipping,
        Payment,
        Totalamount,
        orderStatus,
        address:{
        Fname,
        Lname,
        Email,
        Phone,
        Address,
        Landmark,
        Pincode
        }
      
    })
    try {
        order.save()

    } catch (err) {
        console.log(err)
        return res.status(404).json({ message: err })
    }
    return res.status(200).json({ order })

}

const orderGet = async (req, res, next) => {
    let orders;
    try {
        orders = await Order.find();
    } catch (err) {
        return console.log(err)
    }
    if (!orders) {
        return res.status(404).json({ message: 'No Order Found' })
    }
    return res.status(200).json({ orders })
}

const orderDeleted=async (req,res,next)=>{
    const id=req.params.id

    let orders
    try{
        orders =await Order.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!orders){
        return res.status(404).json({message:"Unable To Order Delete"})
    }
    return res.status(200).json({orders})
}

module.exports = { orderNow,orderGet,orderDeleted}
