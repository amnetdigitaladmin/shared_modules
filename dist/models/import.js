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
exports.ImportEntity = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const enum_1 = require("../helpers/utils/enum");
let ImportEntity = class ImportEntity extends BaseModel_1.BaseModel {
    constructor(import_type) {
        super();
        this.number_of_attempts = 0;
        this.number_of_error = 0;
        this.number_of_records = 0;
        this.data = '';
        this.is_deleted = false;
        this.import_type = import_type;
    }
};
exports.ImportEntity = ImportEntity;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImportEntity.prototype, "request_file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImportEntity.prototype, "response_file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ImportEntity.prototype, "number_of_attempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], ImportEntity.prototype, "number_of_error", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], ImportEntity.prototype, "number_of_records", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ImportEntity.prototype, "import_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.ImportStatusType,
    }),
    __metadata("design:type", Number)
], ImportEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImportEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], ImportEntity.prototype, "is_deleted", void 0);
exports.ImportEntity = ImportEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'imports' }),
    __metadata("design:paramtypes", [Number])
], ImportEntity);
