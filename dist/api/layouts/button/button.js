"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonCopySchema = exports.ButtonFormSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../../../shared");
const buttonType_1 = require("../../../enums/buttonType");
const imageOrientation_1 = require("../../../enums/imageOrientation");
const callbackParameter_1 = require("../../../objects/callbackParameter");
const visibilityParameter_1 = require("../../../objects/visibilityParameter");
const util_1 = require("../../../util");
exports.ButtonFormSchema = zod_1.z.object({
    groupId: shared_1.IdSchema,
    id: shared_1.IdSchema.nullable(),
    label: zod_1.z.string().min(1, 'Label is required').max(32),
    showLabel: zod_1.z.boolean(),
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema,
    valueAlt: zod_1.z.union([zod_1.z.literal(''), shared_1.parameterValueSchema]),
    buttonType: buttonType_1.ButtonTypeSchema,
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(callbackParameter_1.CallbackParameterSchema),
    visibilityParameters: zod_1.z.array(visibilityParameter_1.VisibilityParameterSchema),
    interactionKeyId: shared_1.IdSchema.nullable(),
}).superRefine((val, ctx) => {
    // Check valueAlt requirement
    if ((val.buttonType === 'Slider' || val.buttonType === 'Toggle') && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Value is required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check values are number for slider
    if (val.buttonType === 'Slider') {
        if (typeof (0, util_1.convertParameterValueFromString)(val.value) !== 'number') {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Value must be a number for slider',
                path: ['value']
            });
        }
        if (typeof (0, util_1.convertParameterValueFromString)(val.valueAlt) !== 'number') {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Value must be a number for slider',
                path: ['valueAlt']
            });
        }
    }
});
exports.ButtonCopySchema = zod_1.z.object({
    id: shared_1.IdSchema,
    groupId: shared_1.IdSchema,
});
