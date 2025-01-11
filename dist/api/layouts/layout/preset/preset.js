"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetCopySchema = exports.PresetFormSchema = void 0;
const zod_1 = require("zod");
const callbackParameter_1 = require("../../../../objects/callbackParameter");
const imageOrientation_1 = require("../../../../enums/imageOrientation");
const visibilityParameter_1 = require("../../../../objects/visibilityParameter");
const shared_1 = require("../../../../primitives/shared");
const presetParameter_1 = require("../../../../objects/presetParameter");
exports.PresetFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelSchema,
    showLabel: zod_1.z.boolean(),
    parameters: zod_1.z.array(presetParameter_1.PresetParameterSchema),
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: shared_1.idSchema.nullable(),
});
exports.PresetCopySchema = zod_1.z.object({
    id: shared_1.idSchema,
    layoutId: shared_1.idSchema,
});
