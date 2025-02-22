"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterGroupCopySchema = exports.ParameterGroupFormSchema = void 0;
const zod_1 = require("zod");
const groupWidth_1 = require("../../../enums/groupWidth");
const visibilityParameter_1 = require("../../../objects/visibilityParameter");
const shared_1 = require("../../../primitives/shared");
exports.ParameterGroupFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelOptionalSchema,
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterFormSchema),
    interactionKeyId: shared_1.idSchema.nullable(),
});
exports.ParameterGroupCopySchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema,
});
