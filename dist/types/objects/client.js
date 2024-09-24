"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const client_1 = require("../enums/client");
const tier_1 = require("./tier");
const layout_1 = require("./layout");
const uploadedFile_1 = require("./uploadedFile");
const interactionKey_1 = require("./interactionKey");
exports.ClientSchema = shared_1.BaseIdSchema.extend({
    username: zod_1.z.string(),
    displayName: zod_1.z.string(),
    bio: zod_1.z.string(),
    visibility: zod_1.z.nativeEnum(client_1.ClientVisibility),
    defaultLayoutId: shared_1.IdSchema.min(0).nullable(),
    unknownAvatarMessage: zod_1.z.string(),
    offlineMessage: zod_1.z.string(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    tier: tier_1.TierSchema.optional(),
    layouts: zod_1.z.array(layout_1.LayoutSchema).optional(),
    interactionKeys: zod_1.z.array(interactionKey_1.InteractionKeySchema).optional(),
});
