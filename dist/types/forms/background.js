"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.BackgroundFormSchema = zod_1.z.object({
    parentId: shared_1.IdSchema,
    id: shared_1.IdSchema,
});
