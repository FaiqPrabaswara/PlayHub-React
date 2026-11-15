import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  MinLength,
  Min,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nama: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  platform: string;

  @IsString()
  @IsNotEmpty()
  developer: string;

  @IsNumber()
  @Min(1950)
  tahunRilis: number;

  @IsBoolean()
  sudahDimainkan: boolean;
}