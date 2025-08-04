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
import { Category } from './categories';
import { SubCategory } from './subcategories';
import { BaseModel } from './BaseModel';
export type status_Type = "Active" | "InActive";
export declare class AMC extends BaseModel {
    amc_name: string;
    client_name: string;
    client_id: number;
    start_date: string;
    end_date: string;
    status?: status_Type;
    area_in_sqft: string;
    category_id: Category;
    sub_category_id: SubCategory;
    utilisation_per_year: number;
    constructor(amc_name: string, client_name: string, client_id: number, start_date: string, end_date: string, area_in_sqft: string, category_id: Category, sub_category_id: SubCategory, utilisation_per_year: number);
}
