import { Repository } from 'typeorm';
import { AppDataSource } from '../config/dataSource';
import { User } from '../entities/User';

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({
      where: { email },
    });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }
}
