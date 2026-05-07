"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    async createUser(req, res, next) {
        try {
            const { firstName, lastName, email } = req.body;
            const user = await this.userService.createUser(firstName, email, lastName);
            res.status(201).json({
                message: 'User created successfully',
                data: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    createdAt: user.createdAt,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            if (!user) {
                res.status(404).json({
                    message: 'User not found',
                });
                return;
            }
            res.status(200).json({
                data: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    createdAt: user.createdAt,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map