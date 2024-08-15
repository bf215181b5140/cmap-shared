"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const button_1 = require("../enums/button");
const uploadedFile_1 = require("./uploadedFile");
exports.ButtonSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    valueAlt: zod_1.z.string(),
    buttonType: zod_1.z.nativeEnum(button_1.ButtonType),
    imageOrientation: zod_1.z.nativeEnum(button_1.ButtonImageOrientation),
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    image: uploadedFile_1.UploadedFileSchema.nullable().optional(),
    callbackId: zod_1.z.string().nullable(),
    interactionKeyId: zod_1.z.string().nullable(),
});
