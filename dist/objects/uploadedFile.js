"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFileSchema = void 0;
const zod_1 = require("zod");
exports.UploadedFileSchema = zod_1.z.object({
    id: zod_1.z.string(),
    fileName: zod_1.z.string(),
    urlPath: zod_1.z.string(),
});
