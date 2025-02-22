"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarButtonCopySchema = exports.AvatarButtonFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../primitives/shared");
const imageOrientation_1 = require("../../../enums/imageOrientation");
const parameter_1 = require("../../../primitives/parameter");
exports.AvatarButtonFormSchema = zod_1.z.object({
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelOptionalSchema,
    vrcAvatarId: parameter_1.parameterValueAvatarIdSchema,
    order: zod_1.z.number(),
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    interactionKeyId: shared_1.idSchema.nullable(),
});
exports.AvatarButtonCopySchema = zod_1.z.object({
    avatarGroupId: shared_1.idSchema,
    id: shared_1.idSchema,
});
