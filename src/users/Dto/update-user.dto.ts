import { IsString, MinLength, IsOptional } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  username?: string;
  @IsString()
  @MinLength(3)
  @IsOptional()
  password?: string;
}
