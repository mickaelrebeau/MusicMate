import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './model/user.entity';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    
    @Get()
    @ApiResponse({
        description: 'Get all users',
    })
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    @ApiResponse({
        description: 'Get user by id',
    })
    getById(@Param('id') id: string): Promise<User | null> {
        return this.userService.getById(id);
    }

    @Post()
    @ApiResponse({
        description: 'Create user',
    })
    create(@Param() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    @ApiResponse({
        description: 'Update user',
    })
    update(@Param('id') id: string, @Body() user: User): Promise<any> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    @ApiResponse({
        description: 'Delete user',
    })
    destroy(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
