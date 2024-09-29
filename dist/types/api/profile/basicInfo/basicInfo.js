"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfoFormSchema = void 0;
const shared_1 = require("../../../shared");
const zod_1 = require("zod");
const client_1 = require("../../../enums/client");
exports.BasicInfoFormSchema = zod_1.z.object({
    displayName: zod_1.z.string().min(3).max(32),
    bio: zod_1.z.string().max(1000),
    visibility: zod_1.z.nativeEnum(client_1.ClientVisibility),
    defaultLayoutId: shared_1.IdSchema.min(0).nullable(),
    unknownAvatarMessage: zod_1.z.string().max(1000),
    offlineMessage: zod_1.z.string().max(1000),
});
