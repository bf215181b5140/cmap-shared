"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema = exports.RegisterInfoSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
exports.RegisterInfoSchema = zod_1.z.object({
    available: zod_1.z.boolean(),
    keyRequired: zod_1.z.boolean(),
    message: zod_1.z.string().optional(),
});
exports.RegisterFormSchema = zod_1.z.object({
    username: shared_1.usernameSchema,
    password: shared_1.passwordSchema,
    passwordRepeat: shared_1.passwordSchema,
    fingerprint: zod_1.z.string().length(64),
}).superRefine((val, ctx) => {
    if (val.password !== val.passwordRepeat) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['password']
        });
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordRepeat']
        });
    }
});
exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema.and(zod_1.z.object({
    inviteKey: zod_1.z.string().max(32),
}));
