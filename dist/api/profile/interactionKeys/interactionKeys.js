"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeysFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
exports.InteractionKeysFormSchema = zod_1.z.object({
    interactionKeys: zod_1.z.array(zod_1.z.object({
        id: shared_1.IdSchema.nullable(),
        label: zod_1.z.string().min(1).max(32),
        key: zod_1.z.string().min(1).max(16),
    })),
});
