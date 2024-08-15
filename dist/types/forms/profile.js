"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const client_1 = require("../enums/client");
exports.ProfileFormSchema = shared_1.BaseIdSchema.extend({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000).nullable(),
    visibility: zod_1.z.nativeEnum(client_1.ClientVisibility),
    defaultLayoutId: shared_1.IdSchema.nullable(),
    unknownAvatarDisplay: zod_1.z.nativeEnum(client_1.UnknownAvatarDisplay),
    unknownAvatarMessage: zod_1.z.string().max(1000).nullable(),
    offlineDisplay: zod_1.z.nativeEnum(client_1.OfflineDisplay),
    offlineMessage: zod_1.z.string().max(1000).nullable(),
});
