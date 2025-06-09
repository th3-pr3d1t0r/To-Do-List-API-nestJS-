
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional() // Optional because we might not set it on creation
  completed?: boolean;
}