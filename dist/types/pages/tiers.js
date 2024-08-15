"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiersPageSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("../objects/tier");
const registrationKey_1 = require("../objects/registrationKey");
exports.TiersPageSchema = zod_1.z.object({
    tiers: zod_1.z.array(tier_1.TierSchema),
    clientTier: tier_1.TierSchema,
    registrationKeys: zod_1.z.array(registrationKey_1.RegistrationKeySchema),
});
