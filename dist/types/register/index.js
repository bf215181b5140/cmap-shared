"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.RegisterFormSchema = zod_1.z.object({
    username: shared_1.usernameSchema,
    passwordOne: shared_1.passwordSchema,
    passwordTwo: shared_1.passwordSchema,
    fingerprint: zod_1.z.string().length(64),
}).superRefine((val, ctx) => {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});
exports.RegisterSchema = exports.RegisterFormSchema.innerType().extend({
    password: shared_1.passwordSchema,
}).omit({
    passwordOne: true,
    passwordTwo: true,
});
exports.RegisterKeySchema = zod_1.z.object({
    registrationKey: zod_1.z.string().max(32),
});
