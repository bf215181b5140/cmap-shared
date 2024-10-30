"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
const groupWidth_1 = require("../../../enums/groupWidth");
const visibilityParameter_1 = require("../../../objects/visibilityParameter");
exports.GroupFormSchema = zod_1.z.object({
    layoutId: shared_1.IdSchema,
    id: shared_1.IdSchema.nullable(),
    label: zod_1.z.string().max(32),
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: shared_1.IdSchema.nullable(),
});
