import { DataSource } from 'typeorm';
import { databaseConfig } from './database';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: databaseConfig.synchronize,
  logging: databaseConfig.logging,
  entities: [User],
  migrations: [],
  subscribers: [],
});
