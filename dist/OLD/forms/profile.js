"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
const clientVisibility_1 = require("../../enums/clientVisibility");
exports.ProfileFormSchema = shared_1.BaseIdSchema.extend({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    visibility: clientVisibility_1.ClientVisibilitySchema,
    defaultLayoutId: shared_1.IdSchema.min(0).nullable(),
    unknownAvatarMessage: zod_1.z.string().max(1000),
    offlineMessage: zod_1.z.string().max(1000),
});
