"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginTokenSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.LoginTokenSchema = zod_1.z.object({
    apiToken: shared_1.usernameSchema,
    displayName: shared_1.passwordSchema,
    isAdmin: zod_1.z.boolean(),
});
