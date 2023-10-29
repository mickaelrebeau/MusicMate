import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: "1", description: 'User id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'MikeDreeman', description: 'User pseudo' })
  @Column()
  pseudo: string;

  @ApiProperty({ example: '@MikeTest123', description: 'User password' })
  @Column()
  password: string;

  @ApiProperty({ example: 'mike@admin.fr', description: 'User email' })
  @Column()
  email: string;

  @ApiProperty({ example: ['Pop', 'Rock'], description: 'User genres' })
  @Column("text", { array: true })
  genres: string[];
}
