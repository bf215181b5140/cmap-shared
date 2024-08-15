"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.LoginFormSchema = zod_1.z.object({
    username: shared_1.usernameSchema,
    password: shared_1.passwordSchema,
});
