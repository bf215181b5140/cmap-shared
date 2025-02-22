"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const tier_1 = require("./tier");
const layout_1 = require("./layout");
const uploadedFile_1 = require("./uploadedFile");
const interactionKey_1 = require("./interactionKey");
const background_1 = require("./background");
const theme_1 = require("./theme");
const clientVisibility_1 = require("../enums/clientVisibility");
const avatarGroup_1 = require("./avatarGroup");
exports.ClientSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    username: zod_1.z.string(),
    displayName: zod_1.z.string(),
    bio: zod_1.z.string(),
    visibility: clientVisibility_1.ClientVisibilitySchema,
    defaultLayoutId: shared_1.IdSchema.nullable(),
    unknownAvatarMessage: zod_1.z.string(),
    offlineMessage: zod_1.z.string(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    tier: tier_1.TierSchema.optional(),
    background: background_1.BackgroundSchema.optional(),
    theme: theme_1.ThemeSchema.optional(),
    layouts: zod_1.z.array(layout_1.LayoutSchema).optional(),
    avatarGroups: zod_1.z.array(avatarGroup_1.AvatarGroupSchema).optional(),
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema).optional(),
});
