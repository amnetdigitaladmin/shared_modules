import { BaseModel } from './BaseModel';
import { ImportStatusType } from '../helpers/utils/enum';
export declare class ImportEntity extends BaseModel {
    request_file_url?: string;
    response_file_url?: string;
    number_of_attempts: number;
    number_of_error: number;
    number_of_records: number;
    import_type: number;
    status?: ImportStatusType.NotStarted;
    data: string;
    is_deleted: boolean;
    constructor(import_type: number);
}
