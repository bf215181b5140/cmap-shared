"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const uploadedFile_1 = require("./uploadedFile");
const buttonType_1 = require("../enums/buttonType");
const imageOrientation_1 = require("../enums/imageOrientation");
const visibilityParameter_1 = require("./visibilityParameter");
const callbackParameter_1 = require("./callbackParameter");
exports.ButtonSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    showLabel: zod_1.z.boolean(),
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    valueAlt: zod_1.z.string(),
    buttonType: buttonType_1.ButtonTypeSchema,
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: zod_1.z.string().nullable(),
});
