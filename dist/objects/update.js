"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.UpdateSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    version: zod_1.z.string(),
    download: zod_1.z.string(),
    description: zod_1.z.string(),
    date: zod_1.z.coerce.date(),
});
