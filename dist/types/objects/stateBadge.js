"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBadgeSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const stateBadgeType_1 = require("../enums/stateBadgeType");
exports.StateBadgeSchema = shared_1.BaseIdSchema.extend({
    type: stateBadgeType_1.StateBadgeTypeSchema,
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    icon: zod_1.z.string(),
    order: zod_1.z.number(),
});
