"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldType = exports.FieldOption = exports.FormField = exports.FormMeta = exports.ClientCredentials = void 0;
var forms_1 = require("./forms");
Object.defineProperty(exports, "FormMeta", { enumerable: true, get: function () { return forms_1.FormMeta; } });
Object.defineProperty(exports, "FormField", { enumerable: true, get: function () { return forms_1.FormField; } });
Object.defineProperty(exports, "FieldOption", { enumerable: true, get: function () { return forms_1.FieldOption; } });
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
