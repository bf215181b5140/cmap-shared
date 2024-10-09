"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.BaseFormSchema = exports.BaseNullableIdSchema = exports.BaseIdSchema = exports.parameterValueObjectOrAvatarSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueObjectSchema = exports.parameterValueSchema = exports.parameterPathSchema = exports.vrcAvatarIdSchema = exports.passwordSchema = exports.usernameSchema = exports.IdSchema = void 0;
const zod_1 = require("zod");
const util_1 = require("../util");
// ------------------- Field schemas ------------------- //
exports.IdSchema = zod_1.z.string().min(1).max(20);
exports.usernameSchema = zod_1.z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
exports.passwordSchema = zod_1.z.string().min(6).max(32);
exports.vrcAvatarIdSchema = zod_1.z.string().min(6, 'Invalid VRChat avatar ID').startsWith('avtr_', 'Invalid VRChat avatar ID').max(50);
exports.parameterPathSchema = zod_1.z.string().min(1, 'Parameter path required').max(100);
exports.parameterValueSchema = zod_1.z.string().min(1, 'Parameter value required').max(5)
    .refine((val) => (0, util_1.convertParameterValueFromString)(val) !== undefined, { message: 'Invalid value, must be either number or bool' });
exports.parameterValueObjectSchema = zod_1.z.union([zod_1.z.number(), zod_1.z.boolean()]);
exports.parameterValueOrAvatarSchema = zod_1.z.union([exports.parameterValueSchema, exports.vrcAvatarIdSchema]);
exports.parameterValueObjectOrAvatarSchema = zod_1.z.union([exports.parameterValueObjectSchema, exports.vrcAvatarIdSchema]);
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
