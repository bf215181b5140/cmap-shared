"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.AvatarFormSchema = zod_1.z.object({
    parentId: shared_1.IdSchema,
    avatars: zod_1.z.array(shared_1.BaseNullableIdSchema.extend({
        vrcAvatarId: shared_1.vrcAvatarIdSchema,
    }))
});
