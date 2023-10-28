import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './model/user.entity';
import { UserUpdateDto } from './dtos/userUpdtae.dto';
import { UpdateResult } from 'typeorm';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    
    @Get()
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Get all users',
    })
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Get user by id',
    })
    getById(@Param('id') id: string): Promise<User | null> {
        return this.userService.getById(id);
    }

    @Post()
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Create user',
    })
    create(@Param() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Update user',
    })
    update(@Param('id') id: string, @Body() user: UserUpdateDto): Promise<UpdateResult> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Delete user',
    })
    destroy(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
