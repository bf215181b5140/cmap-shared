"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityParameterSchema = void 0;
const zod_1 = require("zod");
const visibilityParameterCondition_1 = require("../enums/visibilityParameterCondition");
const parameter_1 = require("../primitives/parameter");
exports.VisibilityParameterSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema,
    condition: visibilityParameterCondition_1.VisibilityParameterConditionSchema,
});
