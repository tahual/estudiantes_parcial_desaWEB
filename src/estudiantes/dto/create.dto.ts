import { IsInt, IsString, IsNotEmpty, MaxLength, IsDateString, IsOptional, IsIn } from 'class-validator';

export class CreateEstudianteDto {
  @IsInt()
  idEstudiante: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellido: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsIn(['M', 'F'])
  sexo?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  carne: string;
}