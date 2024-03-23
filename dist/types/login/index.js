"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
var zod_1 = require("zod");
exports.LoginSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(16),
    password: zod_1.z.string().min(6).max(32),
});
