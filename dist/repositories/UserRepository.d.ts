import { User } from '../entities/User';
export declare class UserRepository {
    private repository;
    constructor();
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
}
//# sourceMappingURL=UserRepository.d.ts.map