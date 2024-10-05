"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueSchema = void 0;
const zod_1 = require("zod");
exports.KeyValueSchema = zod_1.z.object({
    key: zod_1.z.string(),
    value: zod_1.z.string(),
});
