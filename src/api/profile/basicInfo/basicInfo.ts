import { IdSchema } from '../../../shared';
import { z } from 'zod';
import { ClientVisibilitySchema } from '../../../enums/clientVisibility';

export const BasicInfoFormSchema = z.object({
  displayName: z.string().min(3).max(32),
  bio: z.string().max(1000),
  visibility: ClientVisibilitySchema,
  defaultLayoutId: IdSchema.nullable(),
  unknownAvatarMessage: z.string().max(1000),
  offlineMessage: z.string().max(1000),
});

export type BasicInfoFormDTO = z.infer<typeof BasicInfoFormSchema>;
