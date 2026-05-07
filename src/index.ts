import { AppDataSource } from './config/dataSource';
import { appConfig } from './config/database';
import app from './app';

const startServer = async () => {
  try {
    // Initialize database connection
    await AppDataSource.initialize();
    console.log('Database connection established');

    // Start server
    app.listen(appConfig.port, () => {
      console.log(`Server is running on port ${appConfig.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
