"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetParameterSchema = exports.PresetParameterFormSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.PresetParameterFormSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema
});
exports.PresetParameterSchema = zod_1.z.object({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema
});
