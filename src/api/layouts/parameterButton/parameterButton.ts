import { z } from 'zod';
import { ParameterButtonTypeSchema } from '../../../enums/parameterButtonType';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { CallbackParameterFormSchema } from '../../../objects/callbackParameter';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { parameterPathSchema, parameterValueFormSchema } from '../../../primitives/parameter';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';

export const ParameterButtonFormSchema = z.object({
  groupId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  showLabel: z.boolean(),
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  valueAlt: z.union([z.literal('').transform(() => null), parameterValueFormSchema]).nullable(),
  buttonType: ParameterButtonTypeSchema,
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterFormSchema),
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: idSchema.nullable(),
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

export type ParameterButtonFormDTO = z.infer<typeof ParameterButtonFormSchema>;

export const ParameterButtonCopySchema = z.object({
  groupId: idSchema,
  id: idSchema,
});

export type ParameterButtonCopyDTO = z.infer<typeof ParameterButtonCopySchema>;
