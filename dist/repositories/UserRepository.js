"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const dataSource_1 = require("../config/dataSource");
const User_1 = require("../entities/User");
class UserRepository {
    constructor() {
        this.repository = dataSource_1.AppDataSource.getRepository(User_1.User);
    }
    async findById(id) {
        return this.repository.findOne({
            where: { id },
        });
    }
    async findByEmail(email) {
        return this.repository.findOne({
            where: { email },
        });
    }
    async create(user) {
        const newUser = this.repository.create(user);
        return this.repository.save(newUser);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map