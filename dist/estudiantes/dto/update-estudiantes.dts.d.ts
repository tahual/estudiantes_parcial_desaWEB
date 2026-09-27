import { CreateEstudianteDto } from './create.dto';
declare const UpdateEstudianteDto_base: import("@nestjs/mapped-types", { with: { "resolution-mode": "import" } }).MappedType<Partial<Omit<CreateEstudianteDto, "idEstudiante">>>;
export declare class UpdateEstudianteDto extends UpdateEstudianteDto_base {
}
export {};
