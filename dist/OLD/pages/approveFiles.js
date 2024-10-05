"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveFilesPageSchema = void 0;
const zod_1 = require("zod");
const uploadedFile_1 = require("../../objects/uploadedFile");
// ------------------- Page ------------------- //
exports.ApproveFilesPageSchema = zod_1.z.array(uploadedFile_1.UploadedFileSchema);
