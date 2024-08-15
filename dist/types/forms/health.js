"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
exports.HealthFormSchema = shared_1.BaseIdSchema.extend({
    healthEnabled: zod_1.z.boolean(),
    healthPath: shared_1.parameterPathSchema,
    healthMax: zod_1.z.number(),
});
