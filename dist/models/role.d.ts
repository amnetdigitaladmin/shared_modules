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
import { BaseModel } from './BaseModel';
export interface Irole {
    name: string;
    id?: number;
    is_deleted?: boolean;
    created_by?: number;
}
export declare class Role extends BaseModel {
    name: string;
    is_deleted?: boolean;
    constructor(name: string, is_deleted: boolean, userId: number);
}
