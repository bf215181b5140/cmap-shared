"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfoFormSchema = void 0;
const zod_1 = require("zod");
const clientVisibility_1 = require("../../../enums/clientVisibility");
exports.BasicInfoFormSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    visibility: clientVisibility_1.ClientVisibilitySchema,
    defaultLayoutId: zod_1.z.string().max(20).nullable(),
    unknownAvatarMessage: zod_1.z.string().max(1000),
    offlineMessage: zod_1.z.string().max(1000),
});
