"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroupCopySchema = exports.AvatarGroupFormSchema = void 0;
const zod_1 = require("zod");
const groupWidth_1 = require("../../../enums/groupWidth");
const shared_1 = require("../../../primitives/shared");
exports.AvatarGroupFormSchema = zod_1.z.object({
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelOptionalSchema,
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    interactionKeyId: shared_1.idSchema.nullable(),
});
exports.AvatarGroupCopySchema = zod_1.z.object({
    id: shared_1.idSchema,
});
