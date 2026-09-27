import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create.dto';
import { UpdateEstudianteDto } from './dto/update-estudiantes.dts';
export declare class EstudiantesController {
    private readonly estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    findAll(): Promise<import("./dto/estudiantes.entity").Estudiante[]>;
    findOne(id: number): Promise<import("./dto/estudiantes.entity").Estudiante>;
    create(dto: CreateEstudianteDto): Promise<import("./dto/estudiantes.entity").Estudiante>;
    update(id: number, dto: UpdateEstudianteDto): Promise<import("./dto/estudiantes.entity").Estudiante>;
    remove(id: number): Promise<void>;
}
