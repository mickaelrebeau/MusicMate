import { ApiProperty } from "@nestjs/swagger";

export class UserUpdateDto {
    @ApiProperty({ example: 'test', description: 'User pseudo' })
    pseudo: string;

    @ApiProperty({ example: 'test@test.fr', description: 'User email' })
    email: string;

    @ApiProperty({ example: ['test', 'test2', 'test3'], description: 'User genres' })
    genres: string[];
}