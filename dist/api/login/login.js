"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginFormSchema = exports.LoginTokenSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../shared");
exports.LoginTokenSchema = zod_1.z.object({
    apiToken: zod_1.z.string(),
    displayName: zod_1.z.string(),
    isAdmin: zod_1.z.boolean(),
});
exports.LoginFormSchema = zod_1.z.object({
    username: shared_1.usernameSchema,
    password: shared_1.passwordSchema,
});
