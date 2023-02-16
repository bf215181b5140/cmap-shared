"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputType = exports.FieldOption = exports.FormField = exports.FormMeta = void 0;
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
var InputType;
(function (InputType) {
    InputType["Text"] = "text";
    InputType["Button"] = "button";
    InputType["Checkbox"] = "checkbox";
    InputType["Date"] = "date";
    InputType["Email"] = "email";
    InputType["File"] = "file";
    InputType["Hidden"] = "hidden";
    InputType["Number"] = "number";
    InputType["Password"] = "password";
    InputType["Radio"] = "radio";
    InputType["Range"] = "range";
    InputType["Reset"] = "reset";
    InputType["Submit"] = "submit";
    InputType["Time"] = "time";
    InputType["Url"] = "url";
    InputType["Label"] = "label";
    InputType["Boolean"] = "boolean";
    InputType["Select"] = "select";
    InputType["Textarea"] = "textarea";
})(InputType = exports.InputType || (exports.InputType = {}));
