"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionKeySchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.InteractionKeySchema = shared_1.BaseParentIdSchema.extend({
    label: zod_1.z.string().max(32),
    key: zod_1.z.string().max(16),
});
