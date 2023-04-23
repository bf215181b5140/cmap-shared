"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonSchema = exports.layoutSchema = exports.avatarSchema = exports.profileSchema = exports.activateSchema = void 0;
var zod_1 = require("zod");
var index_1 = require("./index");
var activateSchema = zod_1.z.object({
    username: zod_1.z.string().max(50),
    passwordOne: zod_1.z.string().max(50),
    passwordTwo: zod_1.z.string().max(50),
    activationKey: zod_1.z.string().max(50)
});
exports.activateSchema = activateSchema;
var profileSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(50),
    bio: zod_1.z.string().max(500),
    hidden: zod_1.z.boolean()
});
exports.profileSchema = profileSchema;
var avatarSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    vrcId: zod_1.z.string(),
    label: zod_1.z.string().min(3).max(50),
    default: zod_1.z.boolean()
});
exports.avatarSchema = avatarSchema;
var layoutSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    label: zod_1.z.string().min(3).max(50),
    order: zod_1.z.number(),
    parentId: zod_1.z.string()
});
exports.layoutSchema = layoutSchema;
var buttonSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    label: zod_1.z.string().max(20).nullable(),
    path: zod_1.z.string().max(100),
    value: zod_1.z.string().max(5),
    valueAlt: zod_1.z.string().max(5).nullable(),
    valueType: zod_1.z.nativeEnum(index_1.ValueType),
    buttonType: zod_1.z.nativeEnum(index_1.ButtonType),
    order: zod_1.z.number(),
    parentId: zod_1.z.string()
}).superRefine(function (val, ctx) {
    if (val.buttonType === index_1.ButtonType.Slider && val.valueType !== index_1.ValueType.Float) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Slider can only be float type',
            path: ['valueType']
        });
    }
    if (val.valueType === index_1.ValueType.Boolean && (val.value !== 'true' && val.value !== 'false')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Bad input for boolean (true or false)',
            path: ['value']
        });
    }
    if ((val.buttonType === index_1.ButtonType.Slider || val.buttonType === index_1.ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Secondary value required for slider or toggle button',
            path: ['valueAlt']
        });
    }
});
exports.buttonSchema = buttonSchema;
