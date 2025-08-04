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
export declare class Category extends BaseModel {
    category: string;
    is_deleted?: boolean;
    constructor(category: string, is_deleted: boolean);
}
