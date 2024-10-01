"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TierSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.TierSchema = shared_1.BaseIdSchema.extend({
    rank: zod_1.z.number(),
    label: zod_1.z.string(),
    color: zod_1.z.string(),
    interactionKeys: zod_1.z.number(),
    layouts: zod_1.z.number(),
    avatars: zod_1.z.number(),
    useCost: zod_1.z.boolean(),
    health: zod_1.z.boolean(),
    controlParameters: zod_1.z.number(),
    stateBadges: zod_1.z.number(),
    groups: zod_1.z.number(),
    buttons: zod_1.z.number(),
    accountKeys: zod_1.z.number(),
});
