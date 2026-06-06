import { Request, Response } from "express";

// Custom query type
type GoodbyeQuery = {
  name?: string;
};

// Typed request
type GoodbyeRequest = Request<{}, {}, {}, GoodbyeQuery>;

export const sayGoodbye = (
  req: GoodbyeRequest,
  res: Response
) => {
  const { name } = req.query;

  // Validate query
  if (!name || typeof name !== "string") {
    return res.status(400).json({
      error: "Query param 'name' is required and must be a string",
    });
  }

  return res.json({
    farewell: `Goodbye, ${name}`,
  });
};