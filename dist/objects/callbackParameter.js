"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackParameterSchema = exports.CallbackParameterFormSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.CallbackParameterFormSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema,
    seconds: zod_1.z.number().min(0, 'Minimum delay is 0 seconds').max(20, 'Maximum delay is 20 seconds'),
});
exports.CallbackParameterSchema = zod_1.z.object({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema,
    seconds: zod_1.z.number(),
});
