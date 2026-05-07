import { Request, Response, NextFunction } from 'express';

export interface ApiError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  // Handle specific error messages
  if (message.includes('firstName is required')) {
    res.status(400).json({ message: 'Invalid request data' });
    return;
  }

  if (message.includes('email is required')) {
    res.status(400).json({ message: 'Invalid request data' });
    return;
  }

  if (message.includes('Invalid email format')) {
    res.status(400).json({ message: 'Invalid request data' });
    return;
  }

  if (message.includes('Email already exists')) {
    res.status(409).json({ message: 'Email already exists' });
    return;
  }

  if (message.includes('Invalid user id')) {
    res.status(400).json({ message: 'Invalid user id' });
    return;
  }

  // Default error response
  res.status(statusCode).json({ message });
};
