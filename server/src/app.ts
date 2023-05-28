import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ hello: "Hello world" });
});

app.post("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Received a POST request" });
});

export { app };
