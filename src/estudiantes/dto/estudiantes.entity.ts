import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'estudiantes' })
export class Estudiante {
  @PrimaryColumn({ name: 'id_estudiante', type: 'int' })
  idEstudiante: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: true })
  nombre: string;

  @Column({ name: 'apellido', type: 'varchar', length: 100, nullable: true })
  apellido: string;

  @Column({ name: 'fecha_nacimiento', type: 'date', nullable: true })
  fechaNacimiento: string;

  @Column({ name: 'sexo', type: 'varchar', length: 2, nullable: true })
  sexo: string;

  @Column({ name: 'carne', type: 'varchar', length: 10, nullable: true })
  carne: string;
}