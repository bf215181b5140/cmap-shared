"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCostFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.UseCostFormSchema = shared_1.BaseIdSchema.extend({
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: shared_1.parameterPathSchema,
    useCostMax: zod_1.z.number(),
});
