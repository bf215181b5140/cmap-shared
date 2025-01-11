"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetParameterSchema = void 0;
const zod_1 = require("zod");
const parameter_1 = require("../primitives/parameter");
exports.PresetParameterSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema
});
