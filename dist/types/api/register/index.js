"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterWithKeySchema = exports.RegisterSchema = void 0;
var zod_1 = require("zod");
exports.RegisterSchema = zod_1.z.object({
    username: zod_1.z.string().regex(/^[a-zA-Z0-9]+$/).min(3).max(16),
    passwordOne: zod_1.z.string().min(6).max(32),
    passwordTwo: zod_1.z.string().min(6).max(32),
    fingerprint: zod_1.z.string().max(256),
}).superRefine(function (val, ctx) {
    if (val.passwordOne !== val.passwordTwo) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Passwords don\'t match',
            path: ['passwordOne', 'passwordTwo']
        });
    }
});
exports.RegisterWithKeySchema = exports.RegisterSchema.innerType().extend({
    registrationKey: zod_1.z.string().max(16),
});
