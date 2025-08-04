"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const { v4: uuidv4 } = require('uuid');
const bcrypt = __importStar(require("bcrypt"));
class common {
    constructor() {
        //user validations
        this.excelDateFormat = "DD-MM-YYYY";
        this.genderValidation = ["Male", "Female", "Others"];
        this.maritalValidation = ["Single", "Married"];
        this.empTypeValidation = ["Permanent", "Contract"];
    }
    async stringToBinary64(pass) {
        let binaryResult = "";
        for (let i = 0; i < pass.length; i++) {
            const binaryChar = pass[i].charCodeAt(0).toString(2);
            binaryResult += "0".repeat(8 - binaryChar.length) + binaryChar;
        }
        return Buffer.from(binaryResult).toString("base64");
    }
    async generateOTP() {
        // Generate a random number between 1000 and 9999  
        const otp = Math.floor(1000 + Math.random() * 9000);
        return otp.toString(); // Return OTP as a string for consistency 
    }
    async bynary64ToString(data) {
        var binary = Buffer.from(data, 'base64').toString('utf-8');
        const binaryChunks = binary.match(/.{1,8}/g);
        // Convert each chunk to a decimal number and then to a character
        return binaryChunks.map((chunk) => String.fromCharCode(parseInt(chunk, 2))).join('');
    }
    ;
    async removeSpacesFromObjectKeys(obj) {
        const newObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = key.trim();
                newObj[newKey] = obj[key];
            }
        }
        return newObj;
    }
    async getArrayFromString(inputString) {
        return await _.map(inputString.toString().split(","), (val) => parseInt(val));
    }
    // public async getArrayFilterString(inputString: string): Promise<any[]> {
    //   let outPutObjIds: any = inputString.toString().split(",").map((item: any) => { return new ObjectId(item) })
    //   return outPutObjIds
    // }
    async newGuid() {
        return await uuidv4();
    }
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index);
        }
    }
    //import payload generate
    async getPayload(columnMapping, record) {
        record = await this.removeSpacesFromObjectKeys(record);
        const request = {
            created_by: record.created_by,
        };
        const error = [];
        for (const col of columnMapping) {
            if (col.is_optional === false &&
                (record[col.display_name] === undefined ||
                    record[col.display_name].length === 0)) {
                error.push(`"${col.display_name} column is missing"`);
            }
            else if (col.is_optional === true &&
                record[col.display_name] === undefined) {
                request[col.column_name] = "";
            }
            else {
                request[col.column_name] = record[col.display_name];
            }
        }
        if (error.length > 0) {
            return { status: "error", message: error };
        }
        return request;
    }
    async getErrorMessage(err, columnMapping) {
        let errorMessage = err.message;
        if (err.code == 422 && err.data != null) {
            errorMessage = "";
            err.data.forEach(async (element) => {
                errorMessage += element.message + " ";
            });
            let columnName = errorMessage.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
            if (columnName.length) {
                columnName = columnName[0];
                const columnMapped = columnMapping.find((x) => x.column_name == columnName.replace(/\'/gi, ""));
                if (columnMapped)
                    errorMessage = errorMessage.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, `'${columnMapped.display_name}'`);
            }
        }
        console.log(errorMessage);
        return errorMessage;
    }
    async validateMobileNumber(mobileNumber) {
        const regex = /^\d+$/;
        return regex.test(mobileNumber);
    }
    async validateName(name) {
        const regex = /^[a-zA-Z ]+$/;
        return regex.test(name);
    }
    async validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    async alphaNumericRegex(email) {
        const regex = /^[a-zA-Z0-9]*$/;
        return regex.test(email);
    }
    async removeSpace(str) {
        str = str.replace(/\s/g, '');
        return str;
    }
    async containsSpecialCharacters(input) {
        // Regular expression for special characters
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        return specialCharPattern.test(input);
    }
    // Use a separate method to hash passwords
    async hashPassword(plainPassword) {
        const saltRounds = 10;
        return await bcrypt.hash(plainPassword, saltRounds);
    }
}
exports.default = new common();
