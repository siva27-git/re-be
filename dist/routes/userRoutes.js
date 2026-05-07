"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
router.post('/users', (req, res, next) => userController.createUser(req, res, next));
router.get('/users/:id', (req, res, next) => userController.getUser(req, res, next));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map