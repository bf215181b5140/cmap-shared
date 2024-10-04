"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupWidthSchema = void 0;
const zod_1 = require("zod");
exports.GroupWidthSchema = zod_1.z.enum(['None', 'Third', 'Half', 'Full']);
