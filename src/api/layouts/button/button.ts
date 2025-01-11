import { z } from 'zod';
import { IdSchema } from '../../../shared';
import { ButtonTypeSchema } from '../../../enums/buttonType';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { CallbackParameterSchema } from '../../../objects/callbackParameter';
import { VisibilityParameterSchema } from '../../../objects/visibilityParameter';
import { parameterPathSchema, parameterValueFormSchema } from '../../../primitives/parameter';

export const ButtonFormSchema = z.object({
  groupId: IdSchema,
  id: IdSchema.nullable(),
  label: z.string().min(1, 'Label is required').max(32),
  showLabel: z.boolean(),
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  valueAlt: z.union([z.literal('').transform(() => null), parameterValueFormSchema]).nullable(),
  buttonType: ButtonTypeSchema,
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: IdSchema.nullable(),
}).superRefine((val, ctx) => {
  // Check valueAlt requirement
  if ((val.buttonType === 'Slider' || val.buttonType === 'Toggle') && val.valueAlt === null) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Value is required for slider or toggle button',
      path: ['valueAlt']
    });
  }
  // Check values are number for slider
  if (val.buttonType === 'Slider') {
    if (typeof val.value !== 'number') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Value must be a number for slider',
        path: ['value']
      });
    }
    if (typeof val.valueAlt !== 'number') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Value must be a number for slider',
        path: ['valueAlt']
      });
    }
  }
});

export type ButtonFormDTO = z.infer<typeof ButtonFormSchema>;

export const ButtonCopySchema = z.object({
  id: IdSchema,
  groupId: IdSchema,
});

export type ButtonCopyDTO = z.infer<typeof ButtonCopySchema>;
