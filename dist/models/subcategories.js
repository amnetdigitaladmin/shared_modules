"use strict";
/** *
@author
Amnet Digital
@date
2024-05-20
@Model
Role
@usage
Userrole Information will store
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
exports.SubCategory = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
let SubCategory = class SubCategory extends BaseModel_1.BaseModel {
    constructor(category_id, is_deleted, subcategory) {
        super();
        this.category_id = category_id;
        this.subcategory = subcategory;
        this.is_deleted = is_deleted;
    }
};
exports.SubCategory = SubCategory;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], SubCategory.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "subcategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], SubCategory.prototype, "is_deleted", void 0);
exports.SubCategory = SubCategory = __decorate([
    (0, typeorm_1.Entity)({ name: 'subcategories' }),
    __metadata("design:paramtypes", [Number, Boolean, String])
], SubCategory);
