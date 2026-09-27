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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudiantes_entity_1 = require("./dto/estudiantes.entity");
let EstudiantesService = class EstudiantesService {
    estudianteRepo;
    constructor(estudianteRepo) {
        this.estudianteRepo = estudianteRepo;
    }
    findAll() {
        return this.estudianteRepo.find({ order: { idEstudiante: 'ASC' } });
    }
    async findOne(id) {
        const estudiante = await this.estudianteRepo.findOneBy({ idEstudiante: id });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con id ${id} no encontrado`);
        }
        return estudiante;
    }
    async create(dto) {
        const existe = await this.estudianteRepo.existsBy({ idEstudiante: dto.idEstudiante });
        if (existe) {
            throw new common_1.ConflictException(`Ya existe un estudiante con id ${dto.idEstudiante}`);
        }
        const estudiante = this.estudianteRepo.create(dto);
        return this.estudianteRepo.save(estudiante);
    }
    async update(id, dto) {
        const estudiante = await this.findOne(id);
        this.estudianteRepo.merge(estudiante, dto);
        return this.estudianteRepo.save(estudiante);
    }
    async remove(id) {
        const estudiante = await this.findOne(id);
        await this.estudianteRepo.remove(estudiante);
    }
};
exports.EstudiantesService = EstudiantesService;
exports.EstudiantesService = EstudiantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudiantes_entity_1.Estudiante)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstudiantesService);
//# sourceMappingURL=estudiantes.service.js.map