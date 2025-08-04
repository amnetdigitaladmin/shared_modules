import { NotificationRequestType, RequestGroup } from '../helpers/utils/enum';
import { BaseModel } from './BaseModel';
export declare class Notifications extends BaseModel {
    type: NotificationRequestType;
    request_group: RequestGroup;
    request_id: number;
    emp_id: number;
    content: any;
    is_read: boolean;
    constructor(type: NotificationRequestType, emp_id: number, content: any, is_read: boolean, request_group: RequestGroup, request_id: number);
}
