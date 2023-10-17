import { User } from './model/user.entity';
import { UserWithoutPassword } from './model/user';
import { SignUpDto } from 'src/auth/dtos/signUp.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getAll(): Promise<UserWithoutPassword[]> {
        const users = await this.userRepository.find();
        const usersWithoutPasswords = users.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        return usersWithoutPasswords;
    }

    async getById(id: string): Promise<UserWithoutPassword | null> {
        const user = await this.userRepository.findOneBy({id});
        if (user) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }

    async create(user: SignUpDto): Promise<UserWithoutPassword> {
        const newUser = this.userRepository.create(user);
        const savedUser = await this.userRepository.save(newUser);
        const { password, ...userWithoutPassword } = savedUser;
        return userWithoutPassword;
    }

    async update(id: string, user: SignUpDto): Promise<UserWithoutPassword | null> {
        const existingUser = await this.userRepository.findOneBy({id});
        if (!existingUser) {
            return null;
        }
        
        this.userRepository.merge(existingUser, user);
        const updatedUser = await this.userRepository.save(existingUser);
        const { password, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getByPseudo(pseudo: string): Promise<UserWithoutPassword | null> {
        const user = await this.userRepository.findOneBy({ pseudo });
        if (user) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }

    async getByEmail(email: string): Promise<UserWithoutPassword | null> {
        const user = await this.userRepository.findOneBy({ email });
        if (user) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }
}