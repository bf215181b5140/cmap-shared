"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseButtonSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const imageOrientation_1 = require("../enums/imageOrientation");
const uploadedFile_1 = require("./uploadedFile");
exports.BaseButtonSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    order: zod_1.z.number(),
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    interactionKeyId: zod_1.z.string().nullable(),
});
