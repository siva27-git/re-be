"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("./config/dataSource");
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
const startServer = async () => {
    try {
        // Initialize database connection
        await dataSource_1.AppDataSource.initialize();
        console.log('Database connection established');
        // Start server
        app_1.default.listen(database_1.appConfig.port, () => {
            console.log(`Server is running on port ${database_1.appConfig.port}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map