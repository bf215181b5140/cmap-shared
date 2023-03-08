"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodSchemas = exports.InputType = exports.FieldOption = exports.FormField = exports.FormMeta = void 0;
var zod_1 = require("zod");
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
var zodSchemas = /** @class */ (function () {
    function zodSchemas() {
        this.profile = zod_1.z.object({
            displayName: zod_1.z.string().min(3).max(50),
            bio: zod_1.z.string().max(500),
            hidden: zod_1.z.boolean()
        });
        this.avatar = zod_1.z.object({
            id: zod_1.z.number().nullable(),
            client: zod_1.z.number(),
            avatar: zod_1.z.string(),
            label: zod_1.z.string(),
            primary: zod_1.z.boolean(),
            order: zod_1.z.number()
        });
        this.layout = zod_1.z.object({
            id: zod_1.z.number().nullable(),
            avatar: zod_1.z.number(),
            name: zod_1.z.string(),
            order: zod_1.z.number()
        });
        this.button = zod_1.z.object({
            id: zod_1.z.number().nullable(),
            layout: zod_1.z.number(),
            label: zod_1.z.string().max(20).nullable(),
            key: zod_1.z.string().max(100),
            value: zod_1.z.string().max(5),
            type: zod_1.z.string(),
            image: zod_1.z.any().nullable(),
            order: zod_1.z.number()
        });
    }
    return zodSchemas;
}());
exports.zodSchemas = zodSchemas;
