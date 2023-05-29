import { Request, Response } from "express";

import { SignupRequestType } from "./auth.d";

export const signupController = (req: Request, res: Response) => {
  const reqData = req.body as SignupRequestType;

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

  console.log("Sign up successful");

  res.status(201).json({ message: "Signed up", ...req.body });
};

export const loginController = (req: Request, res: Response) => {
  res.json({ message: "Logged in" });
};
