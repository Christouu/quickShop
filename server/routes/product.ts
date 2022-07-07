import { Response, Request } from "express";

const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const Product = require("../models/Product");

//create product
router.post("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  const product = new Product({
    title: req?.body?.title,
    description: req?.body?.description,
    image: req?.body?.image,
    price: req?.body?.price,
    quantity: req?.body?.quantity,
    categories: req?.body?.categories,
    allKinds: req?.body?.allKinds,
    onSale: req?.body?.onSale,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
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

//delete product
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

//get all products
router.get("/find", async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get one product
router.get("/find/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get products by search and tags
router.get("/search", async (req: Request, res: Response) => {
  const { searchQuery, tags } = req.query;

  try {
    //@ts-ignore
    const title = new RegExp(searchQuery, "i"); // Test or test or TEST -> test

    const products = await Product.find({
      //@ts-ignore
      $or: [{ title }, { categories: { $in: tags?.split(",") } }],
    });
    //$or is for matching one or more critiries
    //$in is for searching if it is in the tags array

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = router;
