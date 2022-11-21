const express=require('express')
const router=express.Router();
const {getproduct,addproduct,updateProduct,deleteProduct,getByidProduct}=require('./admin-control')

router.get("/",getproduct)
router.post("/add",addproduct)
router.put("/update/:id",updateProduct)
router.delete("/:id",deleteProduct)
router.get("/idproduct/:id",getByidProduct)
// router.post("/logadmin",loginAdmin)


module.exports=router

