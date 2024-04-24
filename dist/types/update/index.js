"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatesFormSchema = exports.UpdateSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.UpdateSchema = shared_1.BaseIdSchema.extend({
    version: zod_1.z.string().min(5).max(16),
    download: zod_1.z.string().min(1).max(512),
    description: zod_1.z.string().max(2048),
    date: zod_1.z.coerce.date(),
});
exports.UpdatesFormSchema = zod_1.z.object({
    versions: zod_1.z.array(exports.UpdateSchema),
});
