"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.CallbackFormSchema = zod_1.z.object({
    parentId: shared_1.IdSchema,
    callbacks: zod_1.z.array(shared_1.BaseNullableIdSchema.extend({
        label: zod_1.z.string().max(32),
        path: shared_1.parameterPathSchema,
        value: shared_1.parameterValueSchema,
        seconds: zod_1.z.number().min(1, { message: 'Seconds must be between 1 and 15' }).max(15, { message: 'Seconds must be between 1 and 15' })
    })),
});
