"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterBadgeSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const parameterBadgeType_1 = require("../enums/parameterBadgeType");
const parameter_1 = require("../primitives/parameter");
exports.ParameterBadgeSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    type: parameterBadgeType_1.ParameterBadgeTypeSchema,
    path: zod_1.z.string(),
    value: parameter_1.parameterValueSimpleSchema.nullable(),
    label: zod_1.z.string(),
    icon: zod_1.z.string(),
    order: zod_1.z.number(),
});
