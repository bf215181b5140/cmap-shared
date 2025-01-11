import { z } from 'zod';
import { CallbackParameterSchema } from '../../../../objects/callbackParameter';
import { ImageOrientationSchema } from '../../../../enums/imageOrientation';
import { VisibilityParameterSchema } from '../../../../objects/visibilityParameter';
import { idSchema, labelSchema } from '../../../../primitives/shared';
import { PresetParameterSchema } from '../../../../objects/presetParameter';

export const PresetFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelSchema,
  showLabel: z.boolean(),
  parameters: z.array(PresetParameterSchema),
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: idSchema.nullable(),
});

export type PresetFormDTO = z.infer<typeof PresetFormSchema>;

export const PresetCopySchema = z.object({
  id: idSchema,
  layoutId: idSchema,
});

export type PresetCopyDTO = z.infer<typeof PresetCopySchema>;
