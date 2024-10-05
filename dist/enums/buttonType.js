"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTypeSchema = void 0;
const zod_1 = require("zod");
exports.ButtonTypeSchema = zod_1.z.enum(['Button', 'Slider', 'Toggle']);
