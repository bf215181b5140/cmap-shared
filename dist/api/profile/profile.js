"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFormSchema = exports.ProfilePageSchema = void 0;
const client_1 = require("../../objects/client");
const zod_1 = require("zod");
const clientVisibility_1 = require("../../enums/clientVisibility");
exports.ProfilePageSchema = client_1.ClientSchema.required({
    image: true,
    tier: true,
    background: true,
    theme: true,
    layouts: true,
    interactionKeys: true,
});
exports.ProfileFormSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    visibility: clientVisibility_1.ClientVisibilitySchema,
    defaultLayoutId: zod_1.z.string().max(20).nullable(),
    unknownAvatarMessage: zod_1.z.string().max(1000),
    offlineMessage: zod_1.z.string().max(1000),
});
