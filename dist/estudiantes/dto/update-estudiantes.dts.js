"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstudianteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dto_1 = require("./create.dto");
class UpdateEstudianteDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_dto_1.CreateEstudianteDto, ['idEstudiante'])) {
}
exports.UpdateEstudianteDto = UpdateEstudianteDto;
//# sourceMappingURL=update-estudiantes.dts.js.map