"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBadgeSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const stateBadge_1 = require("../enums/stateBadge");
exports.StateBadgeSchema = shared_1.BaseIdSchema.extend({
    type: zod_1.z.nativeEnum(stateBadge_1.StateBadgeType),
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    icon: zod_1.z.string(),
    order: zod_1.z.number(),
});
