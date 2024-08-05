"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmapErrorSchema = void 0;
const zod_1 = require("zod");
exports.CmapErrorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    message: zod_1.z.string(),
    code: zod_1.z.number(),
    date: zod_1.z.string().datetime(),
});
