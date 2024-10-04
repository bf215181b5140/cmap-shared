"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const util_1 = require("../../util");
const buttonType_1 = require("../enums/buttonType");
const imageOrientation_1 = require("../enums/imageOrientation");
exports.ButtonFormSchema = shared_1.BaseFormSchema.extend({
    label: zod_1.z.string().max(32),
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema,
    valueAlt: zod_1.z.union([zod_1.z.literal(''), shared_1.parameterValueSchema]),
    buttonType: buttonType_1.ButtonTypeSchema,
    imageOrientation: imageOrientation_1.ImageOrientationSchema,
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackParameters: zod_1.z.array(shared_1.IdSchema).max(4),
    visibilityParameters: zod_1.z.array(shared_1.IdSchema).max(10),
    interactionKeyId: shared_1.IdSchema.min(0).nullable(),
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
