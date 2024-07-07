const User = require("../models/User");
const jwt = require("jsonwebtoken");

class UserService {
  static async signUp(userData) {
    let check = await User.findOne({ email: userData.email });
    if (check) {
      throw new Error("Existing user found with the same email address");
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      ...userData,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, process.env.SECRET_KEY);
    return token;
  }

  static async login(userData) {
    let user = await User.findOne({ email: userData.email });
    if (!user) {
      throw new Error("Wrong Email ID");
    }

    const passCompare = userData.password === user.password;
    if (!passCompare) {
      throw new Error("Wrong Password");
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, process.env.SECRET_KEY);
    return token;
  }

  static async addToCart(userId, itemId) {
    let userData = await User.findOne({ _id: userId });
    userData.cartData[itemId] += 1;
    await User.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData }
    );
  }

  static async removeFromCart(userId, itemId) {
    let userData = await User.findOne({ _id: userId });

    if (
      userData.cartData[itemId] !== undefined &&
      userData.cartData[itemId] > 0
    ) {
      userData.cartData[itemId] -= 1;
      await User.findOneAndUpdate(
        { _id: userId },
        { cartData: userData.cartData }
      );
    } else {
      throw new Error("Item not found in the cart");
    }
  }

  static async getCart(userId) {
    let userData = await User.findOne({ _id: userId });
    return userData.cartData;
  }
}

module.exports = UserService;
