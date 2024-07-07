const Product = require("../models/Product");

class ProductService {
  static async addProduct(productData) {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      ...productData,
    });

    await product.save();
    return product;
  }

  static async removeProduct(id) {
    await Product.findOneAndDelete({ id });
  }

  static async getAllProducts() {
    return await Product.find({});
  }

  static async getNewCollections() {
    const products = await Product.find({});
    return products.slice(-8);
  }

  static async getPopularInWomen() {
    return await Product.find({ category: "women" }).limit(4);
  }
}

module.exports = ProductService;
