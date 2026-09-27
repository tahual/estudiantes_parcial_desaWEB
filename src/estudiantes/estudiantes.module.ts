import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './dto/estudiantes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  providers: [EstudiantesService],
  controllers: [EstudiantesController],
})
export class EstudiantesModule {}
