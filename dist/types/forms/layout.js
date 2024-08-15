"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.LayoutFormSchema = shared_1.BaseFormSchema.extend({
    label: zod_1.z.string().min(3).max(32),
    vrcAvatarId: zod_1.z.union([zod_1.z.literal(''), shared_1.vrcAvatarIdSchema])
});
