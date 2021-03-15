import {
  IsDefined,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @IsDefined()
  public readonly firstName: string;

  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @IsDefined()
  public readonly lastName: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsDefined()
  public readonly age: number;
}
