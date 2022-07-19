import { Request, Response } from "express";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken";

const router = require("express").Router();
const User = require("../models/User");

//get users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
