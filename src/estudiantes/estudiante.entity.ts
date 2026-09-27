import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estudiantes' })
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'id_estudiante' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'date' })
  fecha_nacimiento: string;

  @Column({ type: 'varchar', length: 2 })
  sexo: string;

  @Column({ type: 'varchar', length: 10 })
  carne: string;
}
