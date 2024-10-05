"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeSchema = void 0;
const zod_1 = require("zod");
exports.NotificationTypeSchema = zod_1.z.enum(['info', 'success', 'warning', 'error']);
