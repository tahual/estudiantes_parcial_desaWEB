import { Repository } from 'typeorm';
import { Estudiante } from './dto/estudiantes.entity';
import { CreateEstudianteDto } from './dto/create.dto';
import { UpdateEstudianteDto } from './dto/update-estudiantes.dts';
export declare class EstudiantesService {
    private readonly estudianteRepo;
    constructor(estudianteRepo: Repository<Estudiante>);
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
    create(dto: CreateEstudianteDto): Promise<Estudiante>;
    update(id: number, dto: UpdateEstudianteDto): Promise<Estudiante>;
    remove(id: number): Promise<void>;
}
