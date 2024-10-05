"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutPageSchema = void 0;
const zod_1 = require("zod");
const interactionKey_1 = require("../../objects/interactionKey");
const tier_1 = require("../../objects/tier");
const layout_1 = require("../../objects/layout");
const background_1 = require("../../objects/background");
const style_1 = require("../../objects/style");
exports.LayoutPageSchema = zod_1.z.object({
    layouts: zod_1.z.array(layout_1.LayoutSchema),
    tier: tier_1.TierSchema,
    backgroud: background_1.BackgroundSchema,
    style: style_1.StyleSchema,
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema),
});
