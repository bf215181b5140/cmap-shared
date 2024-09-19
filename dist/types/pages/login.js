"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginTokenSchema = void 0;
const zod_1 = require("zod");
exports.LoginTokenSchema = zod_1.z.object({
    apiToken: zod_1.z.string(),
    displayName: zod_1.z.string(),
    isAdmin: zod_1.z.boolean(),
});
