import express, { Request, Response, NextFunction } from "express";

import authRouter from "./routes/auth";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ hello: "Welcome to Todoist's API" });
});

app.use("/auth", authRouter);

export { app };
