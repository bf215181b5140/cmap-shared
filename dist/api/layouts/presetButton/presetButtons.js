"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetButtonCopySchema = exports.PresetButtonFormSchema = void 0;
const zod_1 = require("zod");
const callbackParameter_1 = require("../../../objects/callbackParameter");
const imageOrientation_1 = require("../../../enums/imageOrientation");
const visibilityParameter_1 = require("../../../objects/visibilityParameter");
const shared_1 = require("../../../primitives/shared");
const presetParameter_1 = require("../../../objects/presetParameter");
exports.PresetButtonFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelOptionalSchema,
    parameters: zod_1.z.array(presetParameter_1.PresetParameterFormSchema),
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterFormSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterFormSchema),
    interactionKeyId: shared_1.idSchema.nullable(),
});
exports.PresetButtonCopySchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema,
});
