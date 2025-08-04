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
exports.Notifications = void 0;
//#region Global Imports
const typeorm_1 = require("typeorm");
const enum_1 = require("../helpers/utils/enum");
const BaseModel_1 = require("./BaseModel");
let Notifications = class Notifications extends BaseModel_1.BaseModel {
    constructor(type, emp_id, content, is_read, request_group, request_id) {
        super();
        this.type = type;
        this.emp_id = emp_id;
        this.content = content;
        this.is_read = is_read;
        this.request_group = request_group;
        this.request_id = request_id;
    }
};
exports.Notifications = Notifications;
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.NotificationRequestType }),
    __metadata("design:type", String)
], Notifications.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.RequestGroup, nullable: true }),
    __metadata("design:type", String)
], Notifications.prototype, "request_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Notifications.prototype, "request_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Notifications.prototype, "emp_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Notifications.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Notifications.prototype, "is_read", void 0);
exports.Notifications = Notifications = __decorate([
    (0, typeorm_1.Entity)({ name: 'notification' }),
    __metadata("design:paramtypes", [String, Number, Object, Boolean, String, Number])
], Notifications);
