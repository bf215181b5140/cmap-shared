"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parameterValueOrAvatarSimpleSchema = exports.parameterValueSimpleSchema = exports.parameterValueOrAvatarFormSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueFormSchema = exports.parameterValueSchema = exports.parameterValueNumberSchema = exports.parameterValueStringSchema = exports.parameterValueAvatarIdSchema = exports.parameterPathSchema = void 0;
const zod_1 = require("zod");
const util_1 = require("../util");
exports.parameterPathSchema = zod_1.z.string().min(1, 'Parameter path required').max(100, 'Parameter path too long');
exports.parameterValueAvatarIdSchema = zod_1.z.string().min(6, 'Too short for VRChat avatar ID').max(50, 'Too long for VRChat avatar ID').startsWith('avtr_', 'Invalid VRChat avatar ID');
exports.parameterValueStringSchema = zod_1.z.string().min(1, 'Parameter value required').max(5, 'Parameter value too long').transform((val, ctx) => {
    const convertedValue = (0, util_1.convertParameterValueFromString)(val);
    if (convertedValue === undefined) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Invalid value, must be either number or bool (true/false)',
        });
        return zod_1.z.NEVER;
    }
    return convertedValue;
});
exports.parameterValueNumberSchema = zod_1.z.number().min(-9999, 'Parameter value too long').max(99999, 'Parameter value too long').transform((val) => {
    if (Number.isInteger(val))
        return val;
    return Math.floor(val * 1000) / 1000;
});
exports.parameterValueSchema = zod_1.z.union([
    exports.parameterValueNumberSchema,
    zod_1.z.boolean()
]);
exports.parameterValueFormSchema = zod_1.z.union([
    exports.parameterValueStringSchema,
    exports.parameterValueNumberSchema,
    zod_1.z.boolean()
]);
exports.parameterValueOrAvatarSchema = zod_1.z.union([
    exports.parameterValueAvatarIdSchema,
    exports.parameterValueNumberSchema,
    zod_1.z.boolean()
]);
exports.parameterValueOrAvatarFormSchema = zod_1.z.union([
    exports.parameterValueStringSchema,
    exports.parameterValueAvatarIdSchema,
    exports.parameterValueNumberSchema,
    zod_1.z.boolean()
]);
exports.parameterValueSimpleSchema = zod_1.z.union([
    zod_1.z.number(),
    zod_1.z.boolean()
]);
exports.parameterValueOrAvatarSimpleSchema = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean()
]);
