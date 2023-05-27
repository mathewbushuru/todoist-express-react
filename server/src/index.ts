import express, { Request, Response, NextFunction } from "express";

const PORT = 5000;

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello world");
});

app.post("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Got a post request");
});

app.listen(PORT, () => {
  console.log(`Todoist server listening at PORT ${PORT}`);
});