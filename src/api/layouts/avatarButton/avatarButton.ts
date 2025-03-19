import { z } from 'zod';
import { idSchema, interactionKeyIdSchema, labelOptionalSchema } from '../../../primitives/shared';
import { ImageOrientationSchema } from '../../../enums/imageOrientation';
import { parameterValueAvatarIdSchema } from '../../../primitives/parameter';

export const AvatarButtonFormSchema = z.object({
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  vrcAvatarId: parameterValueAvatarIdSchema,
  order: z.number(),
  imageOrientation: ImageOrientationSchema,
  interactionKeyId: interactionKeyIdSchema,
});

export type AvatarButtonFormDTO = z.infer<typeof AvatarButtonFormSchema>;

export const AvatarButtonCopySchema = z.object({
  id: idSchema,
});

export type AvatarButtonCopyDTO = z.infer<typeof AvatarButtonCopySchema>;
