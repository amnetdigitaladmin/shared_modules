"use strict";
//import enums
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroup = exports.NotificationRequestType = exports.CONSTANTS = exports.ReportColumnDataType = exports.userType = exports.ImportType = exports.ImportStatusType = void 0;
var ImportStatusType;
(function (ImportStatusType) {
    ImportStatusType[ImportStatusType["NotStarted"] = 1] = "NotStarted";
    ImportStatusType[ImportStatusType["InProgress"] = 2] = "InProgress";
    ImportStatusType[ImportStatusType["Completed"] = 3] = "Completed";
    ImportStatusType[ImportStatusType["Error"] = 4] = "Error";
})(ImportStatusType || (exports.ImportStatusType = ImportStatusType = {}));
var ImportType;
(function (ImportType) {
    ImportType[ImportType["admin"] = 1] = "admin";
    ImportType[ImportType["business_partner"] = 2] = "business_partner";
    ImportType[ImportType["client"] = 3] = "client";
})(ImportType || (exports.ImportType = ImportType = {}));
var userType;
(function (userType) {
    userType[userType["admin"] = 1] = "admin";
    userType[userType["business_partner"] = 2] = "business_partner";
    userType[userType["client"] = 3] = "client";
})(userType || (exports.userType = userType = {}));
var ReportColumnDataType;
(function (ReportColumnDataType) {
    ReportColumnDataType[ReportColumnDataType["Int"] = 1] = "Int";
    ReportColumnDataType[ReportColumnDataType["String"] = 2] = "String";
    ReportColumnDataType[ReportColumnDataType["Date"] = 3] = "Date";
    ReportColumnDataType[ReportColumnDataType["Time"] = 4] = "Time";
    ReportColumnDataType[ReportColumnDataType["DateTime"] = 5] = "DateTime";
    ReportColumnDataType[ReportColumnDataType["Money"] = 6] = "Money";
})(ReportColumnDataType || (exports.ReportColumnDataType = ReportColumnDataType = {}));
var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS["READ"] = "READ";
    CONSTANTS["DELETE"] = "DELETE";
    CONSTANTS["SEND"] = "SEND";
})(CONSTANTS || (exports.CONSTANTS = CONSTANTS = {}));
var NotificationRequestType;
(function (NotificationRequestType) {
    NotificationRequestType["request_raised"] = "request raised";
    NotificationRequestType["request_approve"] = "request approve";
    NotificationRequestType["request_reject"] = "request reject";
    NotificationRequestType["request_withdraw"] = "request withdraw";
    NotificationRequestType["reminder"] = "reminder";
    NotificationRequestType["import"] = "import";
})(NotificationRequestType || (exports.NotificationRequestType = NotificationRequestType = {}));
var RequestGroup;
(function (RequestGroup) {
    RequestGroup["ADMIN"] = "Admin";
    RequestGroup["BUSINESS_PARTNER"] = "Business Partner";
    RequestGroup["CLIENT"] = "Client";
})(RequestGroup || (exports.RequestGroup = RequestGroup = {}));
