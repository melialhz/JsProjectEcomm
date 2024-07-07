const express = require("express");
const ProductController = require("../controllers/ProductController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${process.env.PORT}/image/${req.file.filename}`,
  });
});

router.post("/addproduct", ProductController.addProduct);
router.post("/removeproduct", ProductController.removeProduct);
router.get("/allproducts", ProductController.getAllProducts);
router.get("/newcollections", ProductController.getNewCollections);
router.get("/popularinwomen", ProductController.getPopularInWomen);

module.exports = router;
