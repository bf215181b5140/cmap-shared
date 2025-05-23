"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TierSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.TierSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    rank: zod_1.z.number(),
    label: zod_1.z.string(),
    color: zod_1.z.string(),
    interactionKeys: zod_1.z.number(),
    layouts: zod_1.z.number(),
    layoutAvatars: zod_1.z.number(),
    useCost: zod_1.z.boolean(),
    health: zod_1.z.boolean(),
    groups: zod_1.z.number(),
    parameterButtons: zod_1.z.number(),
    presetButtons: zod_1.z.number(),
    presetButtonParameters: zod_1.z.number(),
    customPresets: zod_1.z.boolean(),
    parameterBadges: zod_1.z.number(),
    avatarButtons: zod_1.z.number(),
    visibilityParameters: zod_1.z.number(),
    callbackParameters: zod_1.z.number(),
    inviteKeys: zod_1.z.number(),
});
