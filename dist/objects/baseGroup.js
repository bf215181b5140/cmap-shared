"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGroupSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const groupWidth_1 = require("../enums/groupWidth");
exports.BaseGroupSchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    order: zod_1.z.number(),
    width: groupWidth_1.GroupWidthSchema,
    interactionKeyId: zod_1.z.string().nullable(),
});
