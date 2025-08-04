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
export declare class userSessions extends BaseModel {
    last_active_at: Date;
    is_active: boolean;
    expires_at: Date;
    user_id: number;
    constructor(last_active_at: Date, expires_at: Date, user_id: number, is_active: boolean);
}
