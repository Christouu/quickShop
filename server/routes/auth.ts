import { Request, Response } from "express";

const router = require("express").Router();
const User = require("../models/User");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req: Request, res: Response) => {
  if (!req.body.username) return "Username required";

  const newUser = new User({
    username: req?.body?.username,
    email: req?.body?.email,
    password: cryptoJs.AES.encrypt(
      req?.body?.password,
      process.env.CRYPTO_JS
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials");

    const hashedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.CRYPTO_JS
    );

    const originalPassword = hashedPassword.toString(cryptoJs.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...restInfo } = user._doc;

    return res.status(200).json({ ...restInfo, accessToken });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
