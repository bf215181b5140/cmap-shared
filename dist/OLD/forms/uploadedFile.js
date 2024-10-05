"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
exports.UploadFileFormSchema = zod_1.z.object({
    parentType: zod_1.z.union([zod_1.z.literal('client'), zod_1.z.literal('button')]),
    parentId: shared_1.IdSchema,
    file: zod_1.z.any(),
});
