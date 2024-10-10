"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
exports.LayoutFormSchema = zod_1.z.object({
    label: zod_1.z.string().min(3).max(32),
    avatars: zod_1.z.array(shared_1.vrcAvatarIdSchema),
    healthEnabled: zod_1.z.boolean(),
    healthPath: shared_1.parameterPathSchema.nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: shared_1.parameterPathSchema.nullable(),
    useCostMax: zod_1.z.number().nullable(),
});
