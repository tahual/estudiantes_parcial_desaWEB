import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CursosModule } from './cursos/cursos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { CursosController } from './cursos/cursos.controller';
import { CursosService } from './cursos/cursos.service';
import { EstudiantesService } from './estudiantes/estudiantes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dany5000',
      database: 'ESTUDIANTES_PARCIAL',
      autoLoadEntities: true,
      synchronize: false,
    }),
    EstudiantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
