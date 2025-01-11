"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackParameterSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.CallbackParameterSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema,
    seconds: zod_1.z.number().min(0, 'Minimum delay is 0 seconds').max(20, 'Maximum delay is 20 seconds'),
});
