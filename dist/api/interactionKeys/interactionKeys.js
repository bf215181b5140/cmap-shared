"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeysFormSchema = exports.InteractionKeysPageSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
const client_1 = require("../../objects/client");
exports.InteractionKeysPageSchema = client_1.ClientSchema.required({
    tier: true,
    interactionKeys: true,
});
exports.InteractionKeysFormSchema = zod_1.z.object({
    interactionKeys: zod_1.z.array(zod_1.z.object({
        id: shared_1.IdSchema.nullable(),
        label: zod_1.z.string().min(1, 'Label is required').max(32),
        key: shared_1.interactionKeySchema,
    })),
});
