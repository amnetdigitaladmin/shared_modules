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
import { BaseModel } from './BaseModel';
export type status_Type = "Pending" | "Accepted" | "Rejected";
export type workflow_status_Type = "Pending" | "In-Progress" | "Completed";
export declare class Request extends BaseModel {
    client_id: number;
    amc_id: number;
    requestAreaInsqft: string;
    approved_by: number;
    approved_at: string;
    required_date: string;
    comments: string;
    status?: status_Type;
    workflow_status?: workflow_status_Type;
    client_comments: string;
    client_rating: number;
    completed_on: string;
    constructor(client_id: number, amc_id: number, requestAreaInsqft: string, approved_by: number, approved_at: string, required_date: string, comments: string, client_comments: string, client_rating: number, completed_on: string);
}
