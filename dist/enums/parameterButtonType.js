"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterButtonTypeSchema = void 0;
const zod_1 = require("zod");
exports.ParameterButtonTypeSchema = zod_1.z.enum(['Button', 'Slider', 'Toggle']);
