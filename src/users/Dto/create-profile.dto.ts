import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsNumber,
} from 'class-validator';
export class ProfileCreateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstname: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastname: string;
  @IsOptional()
  @IsNumber()
  age?: number;
}
