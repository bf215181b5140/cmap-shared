"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientVisibilitySchema = void 0;
const zod_1 = require("zod");
exports.ClientVisibilitySchema = zod_1.z.enum(['Visible', 'Hidden', 'Private']);
