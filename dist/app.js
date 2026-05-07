"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
// Routes
app.use('/api', userRoutes_1.default);
// Error handling middleware (must be last)
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map