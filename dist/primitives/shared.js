"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelSchema = exports.idSchema = void 0;
const zod_1 = require("zod");
exports.idSchema = zod_1.z.string().min(1, 'Id required').max(20, 'Id too long');
exports.labelSchema = zod_1.z.string().min(1, 'Label is required').max(32, 'Label too long (max 32 characters)');
