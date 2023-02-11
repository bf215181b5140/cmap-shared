"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldType = exports.FormFields = exports.FormMeta = exports.ClientCredentials = void 0;
var forms_1 = require("./forms");
Object.defineProperty(exports, "FieldType", { enumerable: true, get: function () { return forms_1.FieldType; } });
var ClientCredentials = /** @class */ (function () {
    function ClientCredentials(username, password, serverUrl) {
        this.username = username ? username : '';
        this.password = password ? password : '';
        this.serverUrl = serverUrl ? serverUrl : '';
    }
    return ClientCredentials;
}());
exports.ClientCredentials = ClientCredentials;
var FormMeta = /** @class */ (function () {
    function FormMeta() {
    }
    return FormMeta;
}());
exports.FormMeta = FormMeta;
var FormFields = /** @class */ (function () {
    function FormFields() {
    }
    return FormFields;
}());
exports.FormFields = FormFields;
