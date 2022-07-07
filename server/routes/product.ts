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

module.exports = router;
