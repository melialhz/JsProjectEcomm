const ProductService = require("../services/ProductService");

class ProductController {
  static async addProduct(req, res) {
    try {
      const newProduct = await ProductService.addProduct(req.body);
      res.json({ success: true, product: newProduct });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async removeProduct(req, res) {
    try {
      await ProductService.removeProduct(req.body.id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.send(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getNewCollections(req, res) {
    try {
      const newCollections = await ProductService.getNewCollections();
      res.send(newCollections);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getPopularInWomen(req, res) {
    try {
      const popularInWomen = await ProductService.getPopularInWomen();
      res.send(popularInWomen);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  }
}

module.exports = ProductController;
