"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfoFormSchema = void 0;
const shared_1 = require("../../../shared");
const zod_1 = require("zod");
const clientVisibility_1 = require("../../../enums/clientVisibility");
exports.BasicInfoFormSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    visibility: clientVisibility_1.ClientVisibilitySchema,
    defaultLayoutId: shared_1.IdSchema.min(0).nullable(),
    unknownAvatarMessage: zod_1.z.string().max(1000),
    offlineMessage: zod_1.z.string().max(1000),
});
