import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
    } catch (error) {
      next(error);
    }
  }

  async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
    } catch (error) {
      next(error);
    }
  }
}
