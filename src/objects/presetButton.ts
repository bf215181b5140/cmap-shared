import { z } from 'zod';
import { UploadedFileSchema } from './uploadedFile';
import { ImageOrientationSchema } from '../enums/imageOrientation';
import { VisibilityParameterSchema } from './visibilityParameter';
import { CallbackParameterSchema } from './callbackParameter';
import { ParameterSchema } from './parameter';
import { BaseButtonSchema } from './baseButton';

export const PresetButtonSchema = BaseButtonSchema.extend({
  parameters: z.array(ParameterSchema),
  useCost: z.number().nullable(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
});

export type PresetButtonDTO = z.infer<typeof PresetButtonSchema>;
