import { User } from '../entities/User';
export declare class UserService {
    private userRepository;
    constructor();
    private isValidEmail;
    createUser(firstName: string, email: string, lastName?: string): Promise<User>;
    getUserById(id: string): Promise<User | null>;
}
//# sourceMappingURL=UserService.d.ts.map