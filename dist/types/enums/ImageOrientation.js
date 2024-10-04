"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOrientationSchema = void 0;
const zod_1 = require("zod");
exports.ImageOrientationSchema = zod_1.z.enum(['Horizontal', 'Square', 'Vertical']);
