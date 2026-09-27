import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellido: string;

  @IsDateString()
  fecha_nacimiento: string;

  @IsString()
  @IsIn(['M', 'F'])
  sexo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  carne: string;
}
