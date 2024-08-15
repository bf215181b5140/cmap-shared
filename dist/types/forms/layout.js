"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.LayoutFormSchema = shared_1.BaseNullableIdSchema.extend({
    label: zod_1.z.string().min(3).max(32),
    avatars: zod_1.z.array(shared_1.vrcAvatarIdSchema),
});
