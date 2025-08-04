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
export declare class SubCategory extends BaseModel {
    category_id: number;
    subcategory: string;
    is_deleted?: boolean;
    constructor(category_id: number, is_deleted: boolean, subcategory: string);
}
