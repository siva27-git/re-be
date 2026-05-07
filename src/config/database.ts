import dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 're_be_db',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
};

export const appConfig = {
  port: parseInt(process.env.PORT || '8080', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
};
