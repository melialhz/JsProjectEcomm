const express = require("express");
const UserController = require("../controllers/UserController");
const fetchUser = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);
router.post("/addtocart", fetchUser, UserController.addToCart);
router.post("/removefromcart", fetchUser, UserController.removeFromCart);
router.post("/getcart", fetchUser, UserController.getCart);

module.exports = router;
