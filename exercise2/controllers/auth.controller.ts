import { Request, Response } from "express";
import { LoginBody } from "../types/auth.types";

type LoginRequest = Request<{}, {}, LoginBody>;

export const loginUser = (
  req: LoginRequest,
  res: Response
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required",
    });
  }

  return res.json({
    message: "Login successful",
    email,
  });
};