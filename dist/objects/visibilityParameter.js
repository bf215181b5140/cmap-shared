"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityParameterSchema = exports.VisibilityParameterFormSchema = void 0;
const zod_1 = require("zod");
const visibilityParameterCondition_1 = require("../enums/visibilityParameterCondition");
const parameter_1 = require("../primitives/parameter");
exports.VisibilityParameterFormSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema,
    condition: visibilityParameterCondition_1.VisibilityParameterConditionSchema,
});
exports.VisibilityParameterSchema = zod_1.z.object({
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema,
    condition: visibilityParameterCondition_1.VisibilityParameterConditionSchema,
});
