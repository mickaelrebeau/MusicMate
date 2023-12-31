import { User } from './model/user.entity';
import { SignUpDto } from 'src/auth/dtos/signUp.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserUpdateDto } from './dtos/userUpdtae.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getById(id: string): Promise<User | null> {
        return await this.userRepository.findOneBy({id});
    }

    async create(user: SignUpDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    async update(id: string, user: UserUpdateDto): Promise<UpdateResult> {
        return await this.userRepository.update(id, user);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getByPseudo(pseudo: string): Promise<User | null> {
        return await this.userRepository.findOneBy({ pseudo })
    }

    async getByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOneBy({ email });
    }
}