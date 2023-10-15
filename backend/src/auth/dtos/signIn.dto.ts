import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({ example: "mike@admin.fr", description: 'User email' })
    email: string;

    @ApiProperty({ example: "mickaeltest", description: 'User password' })
    password: string;
}