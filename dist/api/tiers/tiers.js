"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiersPageSchema = exports.UseInviteKeyFormSchema = exports.GeneratedInviteKeySchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("../../objects/tier");
const inviteKey_1 = require("../../objects/inviteKey");
exports.GeneratedInviteKeySchema = inviteKey_1.InviteKeySchema.required({
    tier: true
}).extend({
    used: zod_1.z.boolean(),
});
exports.UseInviteKeyFormSchema = zod_1.z.object({
    key: zod_1.z.string().length(16, { message: 'Invalid key' }),
});
exports.TiersPageSchema = zod_1.z.object({
    tiers: zod_1.z.array(tier_1.TierSchema),
    clientTier: tier_1.TierSchema,
    generatedKeys: zod_1.z.array(exports.GeneratedInviteKeySchema),
});
