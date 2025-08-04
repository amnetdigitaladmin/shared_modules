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
exports.Request = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
// import bcrypt from "bcrypt-nodejs";
let Request = class Request extends BaseModel_1.BaseModel {
    constructor(client_id, amc_id, requestAreaInsqft, approved_by, approved_at, required_date, comments, client_comments, client_rating, completed_on) {
        super();
        this.client_id = client_id,
            this.amc_id = amc_id,
            this.requestAreaInsqft = requestAreaInsqft,
            this.approved_by = approved_by,
            this.approved_at = approved_at,
            this.required_date = required_date,
            this.comments = comments,
            this.client_comments = client_comments,
            this.client_rating = client_rating,
            this.completed_on = completed_on;
    }
};
exports.Request = Request;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Request.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Request.prototype, "amc_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "requestAreaInsqft", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Request.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "approved_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "required_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: "Pending"
    }),
    __metadata("design:type", String)
], Request.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Pending', 'In-Progress', 'Completed'],
        default: "Pending"
    }),
    __metadata("design:type", String)
], Request.prototype, "workflow_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "client_comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Request.prototype, "client_rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Request.prototype, "completed_on", void 0);
exports.Request = Request = __decorate([
    (0, typeorm_1.Entity)({ name: 'requests' }),
    __metadata("design:paramtypes", [Number, Number, String, Number, String, String, String, String, Number, String])
], Request);
