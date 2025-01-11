"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetCopySchema = exports.PresetFormSchema = exports.PresetParameterFormSchema = void 0;
const zod_1 = require("zod");
const callbackParameter_1 = require("../../../../objects/callbackParameter");
const imageOrientation_1 = require("../../../../enums/imageOrientation");
const visibilityParameter_1 = require("../../../../objects/visibilityParameter");
const parameter_1 = require("../../../../primitives/parameter");
const shared_1 = require("../../../../primitives/shared");
exports.PresetParameterFormSchema = zod_1.z.object({
    path: parameter_1.parameterPathSchema,
    value: parameter_1.parameterValueFormSchema
});
exports.PresetFormSchema = zod_1.z.object({
    layoutId: shared_1.idSchema,
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelSchema,
    showLabel: zod_1.z.boolean(),
    parameters: zod_1.z.array(exports.PresetParameterFormSchema),
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
