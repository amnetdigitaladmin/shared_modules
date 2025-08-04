"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("./user");
const user_sessions_1 = require("./user-sessions");
const import_1 = require("./import");
// import { superAdmin } from '../models/schemas/superAdmin';
const role_1 = require("./role");
const request_1 = require("./request");
const AMC_1 = require("./AMC");
const notifications_1 = require("./notifications");
const categories_1 = require("./categories");
const subcategories_1 = require("./subcategories");
const workflow_1 = require("./workflow");
dotenv_1.default.config();
let AppDataSource;
let retries = 5;
while (retries) {
    try {
        AppDataSource = new typeorm_1.DataSource({
            type: "postgres",
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            synchronize: true,
            logging: false,
            entities: [user_1.User, user_sessions_1.userSessions, import_1.ImportEntity, role_1.Role, request_1.Request, notifications_1.Notifications, AMC_1.AMC, categories_1.Category, subcategories_1.SubCategory, workflow_1.Workflow]
        });
        AppDataSource.initialize()
            .then(() => {
            console.log("Database Connection Established");
        })
            .catch((error) => console.log(error));
        retries = 0;
    }
    catch (error) {
        console.log('Postgres trying to reconnect : ', retries, 'Error :', error);
        retries -= 1;
        AppDataSource = undefined;
        new Promise(res => setTimeout(res, 500));
    }
}
exports.default = AppDataSource;
