"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.CallbackSchema = shared_1.BaseIdSchema.extend({
    label: zod_1.z.string(),
    path: zod_1.z.string(),
    value: zod_1.z.string(),
    seconds: zod_1.z.number(),
});
