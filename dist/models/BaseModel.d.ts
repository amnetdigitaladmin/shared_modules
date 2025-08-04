export declare abstract class Model0 {
    jsonIgnore: string[];
    created_by?: string;
    created_at?: Date;
    updated_by?: string;
    updated_at?: Date;
    insertCreated(): void;
    is_deleted?: boolean;
    logicalDelete: boolean;
    constructor();
    toJSON(): Record<string, any>;
}
export declare abstract class BaseModel extends Model0 {
    id: number;
    constructor();
}
