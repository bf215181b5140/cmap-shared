"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePageSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("../../objects/tier");
const background_1 = require("../../objects/background");
const theme_1 = require("../../objects/theme");
const layout_1 = require("../../objects/layout");
const avatarGroup_1 = require("../../objects/avatarGroup");
const interactionKey_1 = require("../../objects/interactionKey");
exports.ProfilePageSchema = zod_1.z.object({
    tier: tier_1.TierSchema,
    background: background_1.BackgroundSchema,
    theme: theme_1.ThemeSchema,
    layouts: zod_1.z.array(layout_1.LayoutSchema),
    avatarGroups: zod_1.z.array(avatarGroup_1.AvatarGroupSchema),
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema),
});
