declare class common {
    stringToBinary64(pass: any): Promise<string>;
    generateOTP(): Promise<any>;
    bynary64ToString(data: any): Promise<any>;
    removeSpacesFromObjectKeys(obj: any): Promise<any>;
    getArrayFromString(inputString: string): Promise<number[]>;
    newGuid(): Promise<any>;
    asyncForEach<T>(array: Array<T>, callback: (item: T, index: number) => void): Promise<void>;
    getPayload(columnMapping: any, record: any): Promise<any>;
    getErrorMessage(err: any, columnMapping: any): Promise<any>;
    excelDateFormat: string;
    genderValidation: string[];
    maritalValidation: string[];
    empTypeValidation: string[];
    validateMobileNumber(mobileNumber: any): Promise<boolean>;
    validateName(name: any): Promise<boolean>;
    validateEmail(email: any): Promise<boolean>;
    alphaNumericRegex(email: any): Promise<boolean>;
    removeSpace(str: string): Promise<string>;
    containsSpecialCharacters(input: string): Promise<boolean>;
    hashPassword(plainPassword: string): Promise<string>;
}
declare const _default: common;
export default _default;
