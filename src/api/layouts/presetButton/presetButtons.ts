import { z } from 'zod';
import { CallbackParameterFormSchema } from '../../../objects/callbackParameter';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { idSchema, interactionKeyIdSchema, labelOptionalSchema } from '../../../primitives/shared';
import { PresetParameterFormSchema } from '../../../objects/presetParameter';

export const PresetButtonFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  parameters: z.array(PresetParameterFormSchema),
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().int().nullable(),
  callbackParameters: z.array(CallbackParameterFormSchema),
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: interactionKeyIdSchema,
});

export type PresetButtonFormDTO = z.infer<typeof PresetButtonFormSchema>;

export const PresetButtonCopySchema = z.object({
  layoutId: idSchema,
  id: idSchema,
});

export type PresetButtonCopyDTO = z.infer<typeof PresetButtonCopySchema>;
