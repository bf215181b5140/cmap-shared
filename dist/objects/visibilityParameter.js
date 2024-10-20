"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const visibilityParameterCondition_1 = require("../enums/visibilityParameterCondition");
exports.VisibilityParameterSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema,
    condition: visibilityParameterCondition_1.VisibilityParameterConditionSchema,
});
