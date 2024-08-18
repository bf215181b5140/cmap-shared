"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonFormSchema = void 0;
const shared_1 = require("../shared");
const zod_1 = require("zod");
const button_1 = require("../enums/button");
const util_1 = require("../../util");
exports.ButtonFormSchema = shared_1.BaseFormSchema.extend({
    label: zod_1.z.string().max(32),
    path: shared_1.parameterPathSchema,
    value: shared_1.parameterValueSchema,
    valueAlt: zod_1.z.union([zod_1.z.literal(''), shared_1.parameterValueSchema]),
    buttonType: zod_1.z.nativeEnum(button_1.ButtonType),
    imageOrientation: zod_1.z.nativeEnum(button_1.ButtonImageOrientation),
    order: zod_1.z.number(),
    useCost: zod_1.z.number().nullable(),
    callbackId: shared_1.IdSchema.nullable(),
    interactionKeyId: shared_1.IdSchema.nullable(),
}).superRefine((val, ctx) => {
    // Check valueAlt requirement
    if ((val.buttonType === button_1.ButtonType.Slider || val.buttonType === button_1.ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Value is required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check values are number for slider
    if (val.buttonType === button_1.ButtonType.Slider) {
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