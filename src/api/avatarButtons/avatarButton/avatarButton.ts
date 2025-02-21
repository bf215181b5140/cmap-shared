import { z } from 'zod';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { parameterValueAvatarIdSchema } from '../../../primitives/parameter';

export const AvatarButtonFormSchema = z.object({
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  vrcAvatarId: parameterValueAvatarIdSchema,
  order: z.number(),
  imageOrientation: ImageOrientationSchema,
  interactionKeyId: idSchema.nullable(),
});

export type AvatarButtonFormDTO = z.infer<typeof AvatarButtonFormSchema>;
