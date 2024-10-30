import { IdSchema } from '../shared';
import { z } from 'zod';
import { UploadedFileSchema } from './uploadedFile';
import { ButtonTypeSchema } from '../enums/buttonType';
import { ImageOrientationSchema } from '../enums/imageOrientation';
import { VisibilityParameterSchema } from './visibilityParameter';
import { CallbackParameterSchema } from './callbackParameter';

export const ButtonSchema = z.object({
  id: IdSchema,
  label: z.string(),
  path: z.string(),
  value: z.string(),
  valueAlt: z.string(),
  buttonType: ButtonTypeSchema,
  imageOrientation: ImageOrientationSchema,
  order: z.number(),
  useCost: z.number().nullable(),
  image: UploadedFileSchema.nullable().optional(),
  callbackParameters: z.array(CallbackParameterSchema),
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: z.string().nullable(),
});

export type ButtonDTO = z.infer<typeof ButtonSchema>;
