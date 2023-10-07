import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({ example: "test@test.fr", description: 'User email' })
    email: string;

    @ApiProperty({ example: "test", description: 'User password' })
    password: string;
}