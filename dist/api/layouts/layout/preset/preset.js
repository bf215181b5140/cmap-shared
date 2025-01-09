"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetCopySchema = exports.PresetFormSchema = exports.PresetParameterFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../../shared");
const callbackParameter_1 = require("../../../../objects/callbackParameter");
const imageOrientation_1 = require("../../../../enums/imageOrientation");
const visibilityParameter_1 = require("../../../../objects/visibilityParameter");
const util_1 = require("../../../../util");
exports.PresetParameterFormSchema = zod_1.z.object({
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema.transform((val, ctx) => {
        const convertedValue = (0, util_1.convertParameterValueFromString)(val);
        if (convertedValue === undefined) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Invalid value, must be either number or bool',
            });
            return zod_1.z.NEVER;
        }
        return convertedValue;
    })
});
exports.PresetFormSchema = zod_1.z.object({
    layoutId: shared_1.IdSchema,
    id: shared_1.IdSchema.nullable(),
    label: zod_1.z.string().min(1, 'Label is required').max(32),
    showLabel: zod_1.z.boolean(),
    parameters: zod_1.z.array(exports.PresetParameterFormSchema),
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: shared_1.IdSchema.nullable(),
});
exports.PresetCopySchema = zod_1.z.object({
    id: shared_1.IdSchema,
    layoutId: shared_1.IdSchema,
});
