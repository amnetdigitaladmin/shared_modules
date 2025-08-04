"use strict";
/** *
@author
Amnet Digital
@date
2024-05-20
@Model
Role
@usage
Roles Information will store
*/
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
exports.userSessions = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
let userSessions = class userSessions extends BaseModel_1.BaseModel {
    constructor(last_active_at, expires_at, user_id, is_active) {
        super();
        this.last_active_at = last_active_at,
            this.expires_at = expires_at,
            this.user_id = user_id,
            this.is_active = is_active;
    }
};
exports.userSessions = userSessions;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], userSessions.prototype, "last_active_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: true }),
    __metadata("design:type", Boolean)
], userSessions.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], userSessions.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], userSessions.prototype, "user_id", void 0);
exports.userSessions = userSessions = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_sessions' }),
    __metadata("design:paramtypes", [Date, Date, Number, Boolean])
], userSessions);
