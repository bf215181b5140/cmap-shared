"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.LoginFormSchema = void 0;
var zod_1 = require("zod");
exports.LoginFormSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(16),
    password: zod_1.z.string().min(6).max(32),
});
exports.LoginSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(16),
    password: zod_1.z.string().min(6).max(64),
});
