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
exports.AMC = void 0;
const typeorm_1 = require("typeorm");
const categories_1 = require("./categories");
const subcategories_1 = require("./subcategories");
const BaseModel_1 = require("./BaseModel");
// import bcrypt from "bcrypt-nodejs";
let AMC = class AMC extends BaseModel_1.BaseModel {
    constructor(amc_name, client_name, client_id, start_date, end_date, area_in_sqft, category_id, sub_category_id, utilisation_per_year) {
        super();
        this.amc_name = amc_name,
            this.client_name = client_name,
            this.client_id = client_id,
            this.start_date = start_date,
            this.end_date = end_date,
            this.area_in_sqft = area_in_sqft,
            this.category_id = category_id,
            this.sub_category_id = sub_category_id,
            this.utilisation_per_year = utilisation_per_year;
    }
};
exports.AMC = AMC;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AMC.prototype, "amc_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AMC.prototype, "client_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AMC.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AMC.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AMC.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Active', 'InActive'],
        default: "Active"
    }),
    __metadata("design:type", String)
], AMC.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AMC.prototype, "area_in_sqft", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_1.Category),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", categories_1.Category)
], AMC.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subcategories_1.SubCategory),
    (0, typeorm_1.JoinColumn)({ name: 'sub_category_id' }),
    __metadata("design:type", subcategories_1.SubCategory)
], AMC.prototype, "sub_category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AMC.prototype, "utilisation_per_year", void 0);
exports.AMC = AMC = __decorate([
    (0, typeorm_1.Entity)({ name: 'AMCs' }),
    __metadata("design:paramtypes", [String, String, Number, String, String, String, categories_1.Category,
        subcategories_1.SubCategory, Number])
], AMC);
