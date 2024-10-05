"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const uploadedFile_1 = require("./uploadedFile");
const controlParameter_1 = require("./controlParameter");
const buttonType_1 = require("../enums/buttonType");
const imageOrientation_1 = require("../enums/imageOrientation");
exports.ButtonSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    valueAlt: zod_1.z.string(),
    buttonType: buttonType_1.ButtonTypeSchema,
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    callbackParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema).optional(),
    visibilityParameters: zod_1.z.array(controlParameter_1.ControlParameterSchema).optional(),
    interactionKeyId: zod_1.z.string().nullable(),
});
