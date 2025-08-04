import { BaseModel } from './BaseModel';
export interface Iotp extends Document {
    otp: String;
    user_id: number;
}
export declare class Otps extends BaseModel {
    user_id: number;
    send_to: String;
    otp: String;
    constructor(user_id: number, otp: String, send_to: string);
}
