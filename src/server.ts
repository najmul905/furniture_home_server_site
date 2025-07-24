import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './db/client';

dotenv.config();

const port = process.env.PORT || 3000;


app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript added to Node and Express");
});
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
