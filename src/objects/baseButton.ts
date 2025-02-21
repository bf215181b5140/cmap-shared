import { z } from 'zod';
import { IdSchema } from '../shared';
import { ImageOrientationSchema } from '../enums/imageOrientation';
import { UploadedFileSchema } from './uploadedFile';

export const BaseButtonSchema = z.object({
  id: IdSchema,
  label: z.string(),
  order: z.number(),
  imageOrientation: ImageOrientationSchema,
  image: UploadedFileSchema.nullable().optional(),
  interactionKeyId: z.string().nullable(),
});

export type BaseButtonDTO = z.infer<typeof BaseButtonSchema>;
