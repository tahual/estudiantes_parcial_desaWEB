import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudiantesRepository: Repository<Estudiante>,
  ) {}

  create(dto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudiantesRepository.create(dto);
    return this.estudiantesRepository.save(estudiante);
  }

  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({
      order: { id_estudiante: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOneBy({
      id_estudiante: id,
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`);
    }
    return estudiante;
  }

  async update(id: number, dto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    Object.assign(estudiante, dto);
    return this.estudiantesRepository.save(estudiante);
  }

  async remove(id: number): Promise<{ message: string }> {
    const estudiante = await this.findOne(id);
    await this.estudiantesRepository.remove(estudiante);
    return { message: `Estudiante con id ${id} eliminado` };
  }
}
