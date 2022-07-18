import { Request, Response } from "express";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken";

const router = require("express").Router();
const User = require("../models/User");

//get users
router.get("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    const { password, ...restInfo } = users._doc;

    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
