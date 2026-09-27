import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './dto/estudiantes.entity';
import { CreateEstudianteDto } from './dto/create.dto';
import { UpdateEstudianteDto } from './dto/update-estudiantes.dts';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepo: Repository<Estudiante>,
  ) {}

  findAll(): Promise<Estudiante[]> {
    return this.estudianteRepo.find({ order: { idEstudiante: 'ASC' } });
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepo.findOneBy({ idEstudiante: id });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`);
    }
    return estudiante;
  }

  async create(dto: CreateEstudianteDto): Promise<Estudiante> {
    const existe = await this.estudianteRepo.existsBy({ idEstudiante: dto.idEstudiante });
    if (existe) {
      throw new ConflictException(`Ya existe un estudiante con id ${dto.idEstudiante}`);
    }
    const estudiante = this.estudianteRepo.create(dto);
    return this.estudianteRepo.save(estudiante);
  }

  async update(id: number, dto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    this.estudianteRepo.merge(estudiante, dto);
    return this.estudianteRepo.save(estudiante);
  }

  async remove(id: number): Promise<void> {
    const estudiante = await this.findOne(id);
    await this.estudianteRepo.remove(estudiante);
  }
}