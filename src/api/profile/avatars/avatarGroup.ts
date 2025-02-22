import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';

export const AvatarGroupFormSchema = z.object({
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  order: z.number(),
  width: GroupWidthSchema,
  interactionKeyId: idSchema.nullable(),
});

export type AvatarGroupFormDTO = z.infer<typeof AvatarGroupFormSchema>;

export const AvatarGroupCopySchema = z.object({
  id: idSchema,
});

export type AvatarGroupCopyDTO = z.infer<typeof AvatarGroupCopySchema>;
