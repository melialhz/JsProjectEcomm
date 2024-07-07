const UserService = require("../services/UserService");

class UserController {
  static async signUp(req, res) {
    try {
      const token = await UserService.signUp(req.body);
      res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async login(req, res) {
    try {
      const token = await UserService.login(req.body);
      res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async addToCart(req, res) {
    try {
      await UserService.addToCart(req.user.id, req.body.itemId);
      res.send("Added to cart");
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async removeFromCart(req, res) {
    try {
      await UserService.removeFromCart(req.user.id, req.body.itemId);
      res.send("Item removed from cart");
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getCart(req, res) {
    try {
      const cartData = await UserService.getCart(req.user.id);
      res.json(cartData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }
}

module.exports = UserController;
