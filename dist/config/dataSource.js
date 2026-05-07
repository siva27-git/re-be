"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const database_1 = require("./database");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: database_1.databaseConfig.host,
    port: database_1.databaseConfig.port,
    username: database_1.databaseConfig.username,
    password: database_1.databaseConfig.password,
    database: database_1.databaseConfig.database,
    synchronize: database_1.databaseConfig.synchronize,
    logging: database_1.databaseConfig.logging,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=dataSource.js.map