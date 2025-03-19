"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.BaseFormSchema = exports.BaseNullableIdSchema = exports.BaseIdSchema = exports.interactionKeySchema = exports.passwordSchema = exports.usernameSchema = exports.IdSchema = void 0;
const zod_1 = require("zod");
// ------------------- Field schemas ------------------- //
exports.IdSchema = zod_1.z.string().min(1).max(20);
exports.usernameSchema = zod_1.z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
exports.passwordSchema = zod_1.z.string().min(6).max(32);
exports.interactionKeySchema = zod_1.z.string().min(1, 'Key is required').max(16);
// ------------------- Object schemas ------------------- //
exports.BaseIdSchema = zod_1.z.object({
    id: exports.IdSchema
});
exports.BaseNullableIdSchema = zod_1.z.object({
    id: exports.IdSchema.nullable()
});
exports.BaseFormSchema = zod_1.z.object({
    id: exports.IdSchema.nullable(),
    parentId: exports.IdSchema
});
exports.OrderSchema = zod_1.z.array(exports.BaseIdSchema.extend({ order: zod_1.z.number() }));
