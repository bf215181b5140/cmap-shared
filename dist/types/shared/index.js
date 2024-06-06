"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmapApiErrorDTO = exports.CmapApiError = exports.parameterValueOrAvtrFormSchema = exports.parameterValueOrAvtrSchema = exports.parameterValueFormSchema = exports.parameterValueSchema = exports.parameterPathSchema = exports.passwordSchema = exports.usernameSchema = exports.BaseParentIdSchema = exports.RequiredIdSchema = exports.BaseIdSchema = exports.ParameterValueType = void 0;
const zod_1 = require("zod");
const util_1 = require("../../util");
var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["Int"] = "Int";
    ParameterValueType["Float"] = "Float";
    ParameterValueType["Bool"] = "Bool";
})(ParameterValueType = exports.ParameterValueType || (exports.ParameterValueType = {}));
exports.BaseIdSchema = zod_1.z.object({
    id: zod_1.z.string().max(20).nullable()
});
exports.RequiredIdSchema = zod_1.z.object({
    id: zod_1.z.string().min(1).max(20),
});
exports.BaseParentIdSchema = exports.BaseIdSchema.extend({
    parentId: zod_1.z.string().min(1).max(20)
});
exports.usernameSchema = zod_1.z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
exports.passwordSchema = zod_1.z.string().min(6).max(32);
exports.parameterPathSchema = zod_1.z.string().min(1, 'Parameter path required').max(100);
exports.parameterValueSchema = zod_1.z.union([zod_1.z.number(), zod_1.z.boolean()]);
exports.parameterValueFormSchema = zod_1.z.string().min(1, 'Parameter value required').max(5).transform((val, ctx) => {
    const convertedVal = (0, util_1.convertParameterValueFromString)(val);
    if (convertedVal === undefined) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Invalid value, must be either number or bool',
            fatal: true,
        });
        return zod_1.z.NEVER;
    }
    return convertedVal;
});
exports.parameterValueOrAvtrSchema = zod_1.z.union([zod_1.z.string().startsWith('avtr_', 'Invalid VRChat avatar ID').max(50), zod_1.z.number(), zod_1.z.boolean()]);
exports.parameterValueOrAvtrFormSchema = zod_1.z.string().min(1, 'Parameter value required').max(50).transform((val, ctx) => {
    // vrc avatar id
    if (val.startsWith('avtr_'))
        return val;
    // number or boolean
    if (val.length > 5) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Invalid value, number or bool must be 5 or less characters',
            fatal: true,
        });
        return zod_1.z.NEVER;
    }
    const convertedVal = (0, util_1.convertParameterValueFromString)(val);
    if (convertedVal === undefined) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Invalid value, must be either VRChat avatar ID, number or bool',
            fatal: true,
        });
        return zod_1.z.NEVER;
    }
    return convertedVal;
});
class CmapApiError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'CmapApiError';
        Object.setPrototypeOf(this, CmapApiError.prototype);
    }
    dto() {
        return new CmapApiErrorDTO(this.name, this.message, this.code);
    }
}
exports.CmapApiError = CmapApiError;
class CmapApiErrorDTO {
    code;
    name;
    message;
    id;
    constructor(name, message, code, id) {
        this.code = code;
        this.name = name;
        this.message = message;
        this.id = id;
    }
    setId(id) {
        this.id = id;
        return this;
    }
}
exports.CmapApiErrorDTO = CmapApiErrorDTO;
