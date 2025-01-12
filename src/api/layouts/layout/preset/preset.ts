import { z } from 'zod';
import { CallbackParameterFormSchema } from '../../../../objects/callbackParameter';
import { ImageOrientationSchema } from '../../../../enums/imageOrientation';
import { VisibilityParameterFormSchema } from '../../../../objects/visibilityParameter';
import { idSchema, labelSchema } from '../../../../primitives/shared';
import { PresetParameterFormSchema } from '../../../../objects/presetParameter';

export const PresetFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelSchema,
  showLabel: z.boolean(),
  parameters: z.array(PresetParameterFormSchema),
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterFormSchema),
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: idSchema.nullable(),
});

export type PresetFormDTO = z.infer<typeof PresetFormSchema>;

export const PresetCopySchema = z.object({
  id: idSchema,
  layoutId: idSchema,
});

export type PresetCopyDTO = z.infer<typeof PresetCopySchema>;
