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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = exports.Model0 = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const typeorm_1 = require("typeorm");
class Model0 {
    insertCreated() {
        const currentTime = (0, moment_timezone_1.default)().utc().tz('Asia/Kolkata').toDate();
        this.created_at = currentTime;
        this.updated_at = currentTime;
    }
    constructor() {
        this.jsonIgnore = ['logicalDelete', 'is_deleted', 'jsonIgnore'];
        this.created_by = '';
        this.updated_by = '';
        this.is_deleted = false;
        this.logicalDelete = true;
    }
    // Don't serialize some fields  
    toJSON() {
        const result = {};
        for (const x in this) {
            if (!this.jsonIgnore.includes(x)) {
                // @ts-ignore  
                result[x] = this[x];
            }
        }
        return result;
    }
}
exports.Model0 = Model0;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Model0.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Model0.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Model0.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Model0.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Model0.prototype, "insertCreated", null);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Model0.prototype, "is_deleted", void 0);
class BaseModel extends Model0 {
    constructor() {
        super();
        this.id = 0; // This will be set by the database when the entity is saved  
    }
}
exports.BaseModel = BaseModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseModel.prototype, "id", void 0);
