"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("./tier");
const shared_1 = require("../shared");
exports.StyleSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    tier: tier_1.TierSchema.optional(),
});
