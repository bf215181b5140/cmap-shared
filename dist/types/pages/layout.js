"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutPageSchema = void 0;
const zod_1 = require("zod");
const interactionKey_1 = require("../objects/interactionKey");
const tier_1 = require("../objects/tier");
const layout_1 = require("../objects/layout");
exports.LayoutPageSchema = zod_1.z.object({
    layouts: zod_1.z.array(layout_1.LayoutSchema),
    tier: tier_1.TierSchema,
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema),
});
