"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiersPageSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("../../objects/tier");
const accountKey_1 = require("../../objects/accountKey");
exports.TiersPageSchema = zod_1.z.object({
    tiers: zod_1.z.array(tier_1.TierSchema),
    clientTier: tier_1.TierSchema,
    generatedKeys: zod_1.z.array(accountKey_1.AccountKeySchema.required({
        tier: true
    }).extend({
        used: zod_1.z.boolean(),
    })),
});
