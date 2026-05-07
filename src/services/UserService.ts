import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async createUser(
    firstName: string,
    email: string,
    lastName?: string
  ): Promise<User> {
    // Validate firstName
    if (!firstName || firstName.trim() === '') {
      throw new Error('firstName is required');
    }

    // Validate email
    if (!email || email.trim() === '') {
      throw new Error('email is required');
    }

    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    // Check for duplicate email
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Create user
    const user = await this.userRepository.create({
      firstName: firstName.trim(),
      lastName: lastName ? lastName.trim() : undefined,
      email: email.trim(),
    });

    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    if (!id || id.trim() === '') {
      throw new Error('Invalid user id');
    }

    // Basic UUID validation
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      throw new Error('Invalid user id');
    }

    const user = await this.userRepository.findById(id);
    return user;
  }
}
