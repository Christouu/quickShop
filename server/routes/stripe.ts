import { Request, Response } from "express";
const dotenv = require("dotenv");
const router = require("express").Router();
dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req: Request, res: Response) => {
  //create charges from the backend, you will receive tokenId from FE and amount to pay
  //we are using the bulgarian currency for this project
  //this charges can return either an error or a response
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "bgn",
    },
    (stripeErr: any, stripeRes: any) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
