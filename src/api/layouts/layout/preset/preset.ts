import { z } from 'zod';
import { IdSchema, parameterPathSchema, parameterValueSchema } from '../../../../shared';
import { CallbackParameterSchema } from '../../../../objects/callbackParameter';
import { ImageOrientationSchema } from '../../../../enums/imageOrientation';
import { VisibilityParameterSchema } from '../../../../objects/visibilityParameter';
import { convertParameterValueFromString } from '../../../../util';

export const PresetParameterFormSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueSchema.transform((val, ctx) => {
    const convertedValue = convertParameterValueFromString(val);
    if (convertedValue === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid value, must be either number or bool',
      });
      return z.NEVER;
    }
    return convertedValue;
  })
});

export type PresetParameterFormDTO = z.infer<typeof PresetParameterFormSchema>;

export const PresetFormSchema = z.object({
  layoutId: IdSchema,
  id: IdSchema.nullable(),
  label: z.string().min(1, 'Label is required').max(32),
  showLabel: z.boolean(),
  parameters: z.array(PresetParameterFormSchema),
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: IdSchema.nullable(),
});

export type PresetFormDTO = z.infer<typeof PresetFormSchema>;

export const PresetCopySchema = z.object({
  id: IdSchema,
  layoutId: IdSchema,
});

export type PresetCopyDTO = z.infer<typeof PresetCopySchema>;
