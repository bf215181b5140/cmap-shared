"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("./tier");
exports.BackgroundSchema = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    tier: tier_1.TierSchema.optional(),
});
