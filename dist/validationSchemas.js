"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlParametersSchema = exports.parametersSchema = exports.buttonSchema = exports.layoutSchema = exports.avatarSchema = exports.profileSchema = exports.registrationSchema = void 0;
var zod_1 = require("zod");
var index_1 = require("./index");
exports.registrationSchema = zod_1.z.object({
    username: zod_1.z.string().max(50),
    passwordOne: zod_1.z.string().max(50),
    passwordTwo: zod_1.z.string().max(50),
    registrationKey: zod_1.z.string().max(50)
}).superRefine(function (val, ctx) {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});
exports.profileSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(50),
    bio: zod_1.z.string().max(500),
    hidden: zod_1.z.boolean()
});
exports.avatarSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    vrcId: zod_1.z.string(),
    label: zod_1.z.string().min(3).max(50),
    default: zod_1.z.boolean()
});
exports.layoutSchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    label: zod_1.z.string().min(3).max(50),
    order: zod_1.z.number(),
    parentId: zod_1.z.string()
});
exports.buttonSchema = zod_1.z.object({
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
    if (val.valueType === index_1.ValueType.Bool && (val.value !== 'true' && val.value !== 'false')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Bad input for Bool (true or false)',
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
exports.parametersSchema = zod_1.z.object({
    avatarId: zod_1.z.string(),
    parameters: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().nullable(),
        label: zod_1.z.string().max(20),
        path: zod_1.z.string().max(100),
        valueType: zod_1.z.nativeEnum(index_1.ValueType),
    }))
});
exports.controlParametersSchema = zod_1.z.object({
    avatarId: zod_1.z.string(),
    parameters: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().nullable(),
        label: zod_1.z.string().max(20),
        role: zod_1.z.nativeEnum(index_1.ParameterRole),
        path: zod_1.z.string().max(100),
        value: zod_1.z.string().max(5),
        valueAlt: zod_1.z.string().max(5).nullable(),
        valueType: zod_1.z.nativeEnum(index_1.ValueType),
    }))
}).superRefine(function (val, ctx) {
    for (var i = 0; i <= val.parameters.length; i++) {
        if (val.parameters[i].role === index_1.ParameterRole.Callback && (!val.parameters[i].valueAlt || val.parameters[i].valueAlt === '')) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Seconds value required for time until callback triggers',
                path: ["parameters.".concat(i, ".valueAlt")]
            });
        }
        if (val.parameters[i].valueType === index_1.ValueType.Bool && (val.parameters[i].value !== 'true' && val.parameters[i].value !== 'false')) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Bad input for Bool (true or false)',
                path: ["parameters.".concat(i, ".valueType")]
            });
        }
    }
});
