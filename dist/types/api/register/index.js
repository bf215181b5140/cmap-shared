"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = void 0;
var zod_1 = require("zod");
exports.RegisterFormSchema = zod_1.z.object({
    username: zod_1.z.string().regex(/^[a-zA-Z0-9]+$/).min(3).max(16),
    passwordOne: zod_1.z.string().min(6).max(32),
    passwordTwo: zod_1.z.string().min(6).max(32),
    fingerprint: zod_1.z.string().length(64),
}).superRefine(function (val, ctx) {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});
exports.RegisterSchema = exports.RegisterFormSchema.innerType().extend({
    password: zod_1.z.string().min(6).max(64),
}).omit({
    passwordOne: true,
    passwordTwo: true,
});
exports.RegisterKeySchema = zod_1.z.object({
    registrationKey: zod_1.z.string().max(16),
});
