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
export declare class Workflow extends BaseModel {
    title: string;
    content: string;
    status: string;
    order: number;
    requestId: number;
    is_deleted?: boolean;
    constructor(title: string, content: string, status: string, order: number, requestId: number, is_deleted: boolean);
}
