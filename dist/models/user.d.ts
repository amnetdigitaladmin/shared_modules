import { BaseModel } from './BaseModel';
export declare class User extends BaseModel {
    first_name: string;
    last_name: string;
    full_name: string;
    password: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    is_active: boolean;
    EncryptPassword: string;
    roleId: number;
    company: string;
    constructor(first_name: string, last_name: string, full_name: string, password: string, mobile: string, email: string, address: string, city: string, state: string, country: string, pincode: string, is_active: boolean, EncryptPassword: string, roleId: number, company: string);
}
