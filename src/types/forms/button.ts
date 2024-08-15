import { BaseFormSchema, IdSchema, parameterPathSchema, parameterValueSchema } from '../shared';
import { z } from 'zod';
import { ButtonImageOrientation, ButtonType } from '../enums/button';
import { convertParameterValueFromString } from '../../util';

export const ButtonFormSchema = BaseFormSchema.extend({
    label: z.string().max(32),
    path: parameterPathSchema,
    value: parameterValueSchema,
    valueAlt: z.union([z.literal(''), parameterValueSchema]),
    buttonType: z.nativeEnum(ButtonType),
    imageOrientation: z.nativeEnum(ButtonImageOrientation),
    order: z.number(),
    useCost: z.number().nullable(),
    callbackId: IdSchema.nullable(),
    interactionKeyId: IdSchema.nullable(),
}).superRefine((val, ctx) => {
    // Check valueAlt requirement
    if ((val.buttonType === ButtonType.Slider || val.buttonType === ButtonType.Toggle) && (!val.valueAlt || val.valueAlt === '')) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Value is required for slider or toggle button',
            path: ['valueAlt']
        });
    }
    // Check values are number for slider
    if (val.buttonType === ButtonType.Slider) {
        if (typeof convertParameterValueFromString(val.value) !== 'number') {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Value must be a number for slider',
                path: ['value']
            });
        }
        if (typeof convertParameterValueFromString(val.valueAlt) !== 'number') {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Value must be a number for slider',
                path: ['valueAlt']
            });
        }
    }
});

export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;
