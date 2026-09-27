"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const typeorm_1 = require("typeorm");
let Estudiante = class Estudiante {
    idEstudiante;
    nombre;
    apellido;
    fechaNacimiento;
    sexo;
    carne;
};
exports.Estudiante = Estudiante;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_estudiante', type: 'int' }),
    __metadata("design:type", Number)
], Estudiante.prototype, "idEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_nacimiento', type: 'date', nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sexo', type: 'varchar', length: 2, nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'carne', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "carne", void 0);
exports.Estudiante = Estudiante = __decorate([
    (0, typeorm_1.Entity)({ name: 'estudiantes' })
], Estudiante);
//# sourceMappingURL=estudiantes.entity.js.map