"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarButtonsPageSchema = void 0;
const zod_1 = require("zod");
const tier_1 = require("../../objects/tier");
const theme_1 = require("../../objects/theme");
const interactionKey_1 = require("../../objects/interactionKey");
const avatarButton_1 = require("../../objects/avatarButton");
exports.AvatarButtonsPageSchema = zod_1.z.object({
    tier: tier_1.TierSchema,
    theme: theme_1.ThemeSchema,
    avatarButtons: zod_1.z.array(avatarButton_1.AvatarButtonSchema),
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema),
});
