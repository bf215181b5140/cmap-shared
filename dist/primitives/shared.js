"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelRequiredSchema = exports.labelOptionalSchema = exports.idSchema = void 0;
const zod_1 = require("zod");
exports.idSchema = zod_1.z.string().min(1, 'Id required').max(20, 'Id too long');
exports.labelOptionalSchema = zod_1.z.string().max(32, 'Label too long (max 32 characters)');
exports.labelRequiredSchema = exports.labelOptionalSchema.min(1, 'Label is required');
