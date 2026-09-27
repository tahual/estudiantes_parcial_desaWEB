-- Tabla ESTUDIANTES
-- id_estudiante es SERIAL PRIMARY KEY para que se genere solo al insertar
CREATE TABLE IF NOT EXISTS estudiantes (
  id_estudiante SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  fecha_nacimiento DATE,
  sexo VARCHAR(2),
  carne VARCHAR(10)
);

-- Si ya creaste la tabla con "id_estudiante int" (sin llave primaria),
-- ejecuta esto en lugar del CREATE TABLE:
-- CREATE SEQUENCE IF NOT EXISTS estudiantes_id_estudiante_seq OWNED BY estudiantes.id_estudiante;
-- ALTER TABLE estudiantes ALTER COLUMN id_estudiante SET DEFAULT nextval('estudiantes_id_estudiante_seq');
-- ALTER TABLE estudiantes ADD PRIMARY KEY (id_estudiante);
