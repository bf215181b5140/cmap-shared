"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldType = exports.FieldOption = exports.FormField = exports.FormMeta = void 0;
var FormMeta = /** @class */ (function () {
    function FormMeta() {
    }
    return FormMeta;
}());
exports.FormMeta = FormMeta;
var FormField = /** @class */ (function () {
    function FormField() {
    }
    return FormField;
}());
exports.FormField = FormField;
var FieldOption = /** @class */ (function () {
    function FieldOption() {
    }
    return FieldOption;
}());
exports.FieldOption = FieldOption;
var FieldType;
(function (FieldType) {
    FieldType["Text"] = "text";
    FieldType["Password"] = "password";
    FieldType["Textarea"] = "textarea";
    FieldType["File"] = "file";
    FieldType["Boolean"] = "boolean";
    FieldType["Radio"] = "radio";
    FieldType["Checkbox"] = "checkbox";
    FieldType["Select"] = "select";
    FieldType["Submit"] = "submit";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
