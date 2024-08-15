"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationKeySchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const tier_1 = require("./tier");
exports.RegistrationKeySchema = shared_1.BaseIdSchema.extend({
    key: zod_1.z.string(),
    tier: tier_1.TierSchema.nullable().optional(),
    used: zod_1.z.boolean(),
});
