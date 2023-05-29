import { Request, Response } from "express";

export const loginController = (req: Request, res: Response) => {
  res.json({ message: "Logged in" });
};

export const signupController = (req: Request, res: Response) => {
  res.status(201).json({ message: "Signed up" });
};
