"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInteractionKeysResultSchema = exports.PostInteractionKeysSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
const interactionKey_1 = require("../../../objects/interactionKey");
exports.PostInteractionKeysSchema = zod_1.z.object({
    interactionKeys: zod_1.z.array(shared_1.BaseNullableIdSchema.extend({
        label: zod_1.z.string().min(1).max(32),
        key: zod_1.z.string().min(1).max(16),
    })),
});
exports.PostInteractionKeysResultSchema = zod_1.z.array(interactionKey_1.InteractionKeySchema);
