"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackParameterSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.CallbackParameterSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema,
    seconds: zod_1.z.number().min(0).max(20),
});
