import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] method: ${req.method}, Url: ${req.originalUrl}, Body: ${req.body}`);
  next();
};
