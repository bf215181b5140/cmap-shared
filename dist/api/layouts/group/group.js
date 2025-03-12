"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCopySchema = exports.GroupFormSchema = void 0;
const zod_1 = require("zod");
const groupWidth_1 = require("../../../enums/groupWidth");
const visibilityParameter_1 = require("../../../objects/visibilityParameter");
const shared_1 = require("../../../primitives/shared");
exports.GroupFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelOptionalSchema,
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterFormSchema),
    interactionKeyId: shared_1.interactionKeyIdSchema,
});
exports.GroupCopySchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema,
});
