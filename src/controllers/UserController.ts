import { Request, Response } from "express";
import User from "../models/user";

export const createCurrentUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(409).json({ success: false, message: "User already exists" });
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ success: true, data: newUser.toObject() });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
};
