import { z } from 'zod';
import { UploadedFileSchema } from './uploadedFile';
import { ImageOrientationSchema } from '../enums/imageOrientation';
import { VisibilityParameterSchema } from './visibilityParameter';
import { CallbackParameterSchema } from './callbackParameter';
import { PresetParameterSchema } from './presetParameter';

export const PresetSchema = z.object({
  id: z.string(),
  label: z.string(),
  showLabel: z.boolean(),
  parameters: PresetParameterSchema,
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  image: UploadedFileSchema.nullable().optional(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: z.string().nullable(),
});

export type PresetDTO = z.infer<typeof PresetSchema>;
