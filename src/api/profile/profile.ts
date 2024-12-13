import { ClientSchema } from '../../objects/client';
import { z } from 'zod';
import { ClientVisibilitySchema } from '../../enums/clientVisibility';

export const ProfilePageSchema = ClientSchema.required({
  image: true,
  tier: true,
  background: true,
  theme: true,
  layouts: true,
  interactionKeys: true,
});

export type ProfilePageDTO = z.infer<typeof ProfilePageSchema>;

export const ProfileFormSchema = z.object({
  displayName: z.string().min(3).max(32),
  bio: z.string().max(1000),
  visibility: ClientVisibilitySchema,
  defaultLayoutId: z.string().max(20).nullable(),
  unknownAvatarMessage: z.string().max(1000),
  offlineMessage: z.string().max(1000),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;

