import { User } from './model/user.entity';
import { SignUpDto } from 'src/auth/dtos/signUp.dto';
import { Repository, UpdateResult } from 'typeorm';
import { UserUpdateDto } from './dtos/userUpdtae.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    create(user: SignUpDto): Promise<User>;
    update(id: string, user: UserUpdateDto): Promise<UpdateResult>;
    delete(id: string): Promise<void>;
    getByPseudo(pseudo: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
}
