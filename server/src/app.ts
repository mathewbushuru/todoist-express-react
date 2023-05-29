import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import authRouter from "./routes/auth";

const app = express();

/* Middleware */
app.use(bodyParser.json())

/* Routes */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ hello: "Welcome to Todoist's API" });
});

app.use("/auth", authRouter);

export default app
