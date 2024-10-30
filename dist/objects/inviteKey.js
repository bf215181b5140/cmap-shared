"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteKeySchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const tier_1 = require("./tier");
exports.InviteKeySchema = zod_1.z.object({
    id: shared_1.IdSchema,
    key: zod_1.z.string(),
    tier: tier_1.TierSchema.optional(),
});
