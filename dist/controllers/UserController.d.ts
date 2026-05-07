import { Request, Response, NextFunction } from 'express';
export declare class UserController {
    private userService;
    constructor();
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    getUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=UserController.d.ts.map