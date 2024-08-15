"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInfoSchema = void 0;
const zod_1 = require("zod");
exports.RegisterInfoSchema = zod_1.z.object({
    available: zod_1.z.boolean(),
    keyRequired: zod_1.z.boolean(),
});
