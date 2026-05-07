import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', userRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
