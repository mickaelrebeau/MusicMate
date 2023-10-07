import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/user.entity';
import { SignUpDto } from 'src/auth/dtos/signUp.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }
    
    getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    getById(id: string): Promise<User | null> {
        return this.userRepository.findOneBy({id});
    }

    create(user: SignUpDto): Promise<User> {
        return this.userRepository.save(user);
    }

    update(id: string, user: User): Promise<any> {
        return this.userRepository.update(id, user);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    getByPseudo(pseudo: string): Promise<User | null> {
        return this.userRepository.findOneBy({pseudo});
    }

    getByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({email});
    }
}
