import { IsString, MinLength, IsNotEmpty, IsNumber } from 'class-validator';
export class CreatePostDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  @IsNumber()
  authorId: number;
}
