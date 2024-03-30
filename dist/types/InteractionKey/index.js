"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeyFormSchema = exports.InteractionKeySchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.InteractionKeySchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string().max(32),
    key: zod_1.z.string().max(16),
});
exports.InteractionKeyFormSchema = zod_1.z.object({
    clientId: zod_1.z.string().min(1).max(20),
    interactionKeys: zod_1.z.array(exports.InteractionKeySchema).max(16),
});
