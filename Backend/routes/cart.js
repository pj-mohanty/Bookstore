const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");

//add book to cart
router.put("/add-to-carrt", authenticateToken, async(req, res) =>{
    try {
        const{ bookid, id } =req.headers;
        const userData = await User.findById(id);
        const isBookincart = userData.favourites.includes(bookid);
        if(isBookincart){
            return res.json({ status: "Success", message:" Book is alredy present"}); 
        }
        await User.findByIdAndUpdate(id, {$push: { cart: bookid}});
        return res.json({status: "Success", message:" Book added to cart"}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message:" Internal server error"});   
    }
})

//remove book from cart
router.put("/removefrom-cart", authenticateToken, async(req, res) =>{
    try {
        const{ bookid } =req.params;
        const{ id } =req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if(isBookFavourite){
            await User.findByIdAndUpdate(id, {$pull: { favourites: bookid}});
        }
        return res.json({status: "Success", message:" Book removed from cart"}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message:" An error"});   
    }
})


//get cart of a user
router.get("/get-user-cart", authenticateToken, async(req, res) => {
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate("favourites");
        const cart = userData.cart.reverse();
        return res.json({
            status: "Success",
            data: cart,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message : "An error occurred"})
    }
})

module.exports = router;