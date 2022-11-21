const Cart=require('./cart')

const AddtoCart = async (req, res, next) => {
    const { name, image, price,user } = req.body;

 
    const cart = new Cart({
        name,
        image,
        price,
        user

    })
    try {
       await cart.save()

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err })
    }
    return res.status(200).json({ cart })
}



const getCArt = async (req, res, next) => {
    let cart;
    try {
        cart= await Cart.find();
    } catch (err) {
        return console.log(err)
    }
    if (!cart) {
        return res.status(404).json({ message: 'No Product Found'})
    }
    return res.status(200).json({ cart })
}

const deleteCart=async (req,res,next)=>{
    const id=req.params.id

    let cart
    try{
        cart =await Cart.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!cart){
        return res.status(404).json({message:"Unable To Delete"})
    }
    return res.status(200).json({message:"Delete SuccessFully"})
}
module.exports = {AddtoCart,getCArt,deleteCart}