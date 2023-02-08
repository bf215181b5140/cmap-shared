"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFields = exports.FormMeta = exports.ClientCredentials = void 0;
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
