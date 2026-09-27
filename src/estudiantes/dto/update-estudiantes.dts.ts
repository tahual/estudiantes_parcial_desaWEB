import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create.dto';


// Todo opcional, excepto que el ID no se puede modificar
export class UpdateEstudianteDto extends PartialType(
  OmitType(CreateEstudianteDto, ['idEstudiante'] as const),
) {}