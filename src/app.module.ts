import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'postgres',
      database: process.env.DB_NAME ?? 'parcial',
      autoLoadEntities: true,
      // La tabla se crea con db/estudiantes.sql, TypeORM no la modifica
      synchronize: false,
    }),
    EstudiantesModule,
  ],
})
export class AppModule {}
