"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeySchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.InteractionKeySchema = zod_1.z.object({
    id: shared_1.IdSchema,
    label: zod_1.z.string(),
    key: zod_1.z.string(),
});
