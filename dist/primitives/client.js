"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordSchema = exports.usernameSchema = void 0;
const zod_1 = require("zod");
exports.usernameSchema = zod_1.z.string().regex(/^[a-zA-Z0-9]+$/, 'Only letters and numbers allowed').min(3, 'Username too short').max(16, 'Username too long');
exports.passwordSchema = zod_1.z.string().min(6, 'Password too short').max(32, 'Password too long');
