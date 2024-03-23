"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFormSchema = void 0;
var zod_1 = require("zod");
var shared_1 = require("../shared");
exports.AvatarFormSchema = shared_1.BaseIdSchema.extend({
    vrcId: zod_1.z.string().min(1, 'Avatar ID required').max(100),
    label: zod_1.z.string().min(3).max(32),
    default: zod_1.z.boolean()
});
