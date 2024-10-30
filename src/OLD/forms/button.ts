import { BaseFormSchema, IdSchema, parameterPathSchema, parameterValueSchema } from '../../shared';
import { z } from 'zod';
import { convertParameterValueFromString } from '../../util';
import { ButtonTypeSchema } from '../../enums/buttonType';
import { ImageOrientationSchema } from '../../enums/imageOrientation';

export const ButtonFormSchema = BaseFormSchema.extend({
  label: z.string().max(32),
  path: parameterPathSchema,
  value: parameterValueSchema,
  valueAlt: z.union([z.literal(''), parameterValueSchema]),
  buttonType: ButtonTypeSchema,
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(IdSchema).max(4),
  visibilityParameters: z.array(IdSchema).max(10),
  interactionKeyId: IdSchema.min(0).nullable(),
}).superRefine((val, ctx) => {
  // Check valueAlt requirement
  if ((val.buttonType === 'Slider' || val.buttonType === 'Toggle') && (!val.valueAlt || val.valueAlt === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Value is required for slider or toggle button',
      path: ['valueAlt']
    });
  }
  // Check values are number for slider
  if (val.buttonType === 'Slider') {
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
