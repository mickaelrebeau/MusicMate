import { UserService } from './user.service';
import { User } from './model/user.entity';
import { UserUpdateDto } from './dtos/userUpdtae.dto';
import { UpdateResult } from 'typeorm';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    create(user: User): Promise<User>;
    update(id: string, user: UserUpdateDto): Promise<UpdateResult>;
    destroy(id: string): Promise<void>;
}
