"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetSchema = void 0;
const zod_1 = require("zod");
const uploadedFile_1 = require("./uploadedFile");
const imageOrientation_1 = require("../enums/imageOrientation");
const visibilityParameter_1 = require("./visibilityParameter");
const callbackParameter_1 = require("./callbackParameter");
const presetParameter_1 = require("./presetParameter");
exports.PresetSchema = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    showLabel: zod_1.z.boolean(),
    parameters: presetParameter_1.PresetParameterSchema,
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: zod_1.z.string().nullable(),
});
