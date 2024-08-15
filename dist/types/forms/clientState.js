"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStateParameterFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const util_1 = require("../../util");
exports.ClientStateParameterFormSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueOrAvatarSchema,
}).transform((val, ctx) => {
    // vrc avatar id
    if (val.value.startsWith('avtr_'))
        return val;
    // convert to number or boolean
    const convertedVal = (0, util_1.convertParameterValueFromString)(val.value);
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
