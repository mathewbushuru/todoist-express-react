import { Request, Response } from "express";

import User from "../models/user";

import { AuthDataType } from "./auth.d";

export const signupController = (req: Request, res: Response) => {
  const reqData = req.body as AuthDataType;

  // TODO: Validate incoming sign up request data
  if (!reqData.email) {
    const errorMessage = "Signup Error. Email missing";
    console.error(errorMessage);
    return res.status(500).json({ errorMessage });
  }
  if (!reqData.password) {
    const errorMessage = "Signup Error. Password missing";
    console.error(errorMessage);
    return res.status(500).json({ errorMessage });
  }

  const newUser = new User(reqData.email, reqData.password);
  // TODO: Store new user in database

  console.log("Sign up successful");

  res.status(201).json({ message: "Signed up", user: newUser });
};

export const loginController = (req: Request, res: Response) => {
  const reqData = req.body as AuthDataType;

  // TODO: Validate incoming login request data
  if (!reqData.email) {
    const errorMessage = "Login Error. Email missing";
    console.error(errorMessage);
    return res.status(500).json({ errorMessage });
  }
  if (!reqData.password) {
    const errorMessage = "Login Error. Password missing";
    console.error(errorMessage);
    return res.status(500).json({ errorMessage });
  }

  console.log("Login successful");

  res.status(201).json({ message: "Logged in", ...reqData });
};
