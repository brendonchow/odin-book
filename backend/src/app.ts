import express from "express";
import cors from "cors";

const app = express();

app.get("/", cors(), (_req, res) => {
  res.send("Server is running successfully");
});

export default app;
