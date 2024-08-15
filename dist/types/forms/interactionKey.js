"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeyFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.InteractionKeyFormSchema = zod_1.z.object({
    parentId: shared_1.IdSchema,
    interactionKeys: zod_1.z.array(shared_1.BaseNullableIdSchema.extend({
        label: zod_1.z.string().max(32),
        key: zod_1.z.string().max(16),
    })),
});
