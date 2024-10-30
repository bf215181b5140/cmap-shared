"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterBadgeSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const parameterBadgeType_1 = require("../enums/parameterBadgeType");
exports.ParameterBadgeSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    type: parameterBadgeType_1.ParameterBadgeTypeSchema,
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    icon: zod_1.z.string(),
    order: zod_1.z.number(),
});
