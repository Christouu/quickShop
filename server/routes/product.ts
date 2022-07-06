import { Request, Response } from "express";
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = require("express").Router();
const Product = require("../models/Product");

//create product
router.post("/", verifyToken, async (req: Request, res: Response) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    quantity: req.body.quantity,
    categories: req.body.categories,
    allKinds: req.body.allKinds,
    onSale: req.body.onSale,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update product
router.put("/:id", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  async (req: Request, res: Response) => {
    try {
      await Product.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json("Product Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//get product
router.get("/find/:id", async (req: Request, res: Response) => {
  try {
    const getProduct = await Product.findById({ _id: req.params.id });
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all products
router.get("/", async (req: Request, res: Response) => {
  try {
    let products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all products with search
router.get("/search", async (req: Request, res: Response) => {
  const { searchQuery, tags } = req.query;

  try {
    //@ts-ignore
    const title = new RegExp(searchQuery, "i"); // Test or test or TEST -> test

    const products = await Product.find({
      //@ts-ignore
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    //$or is for matching one or more critiries
    //$in is for searching if it is in the tags array

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
