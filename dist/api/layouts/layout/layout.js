"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutCopySchema = exports.LayoutFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../primitives/shared");
const parameter_1 = require("../../../primitives/parameter");
exports.LayoutFormSchema = zod_1.z.object({
    id: shared_1.idSchema.nullable(),
    label: shared_1.labelRequiredSchema,
    avatars: zod_1.z.array(parameter_1.parameterValueAvatarIdSchema),
    healthEnabled: zod_1.z.boolean(),
    healthPath: parameter_1.parameterPathSchema.nullable(),
    healthMax: zod_1.z.number().nullable(),
    useCostEnabled: zod_1.z.boolean(),
    useCostPath: parameter_1.parameterPathSchema.nullable(),
    useCostMax: zod_1.z.number().nullable(),
});
exports.LayoutCopySchema = zod_1.z.object({
    id: shared_1.idSchema,
});
