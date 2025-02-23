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
  displayName: z.string().min(3, 'Display name too short').max(32, 'Display name too long (max 32 characters)'),
  bio: z.string().max(1000, 'Bio too long (max 1000 characters)'),
  visibility: ClientVisibilitySchema,
  defaultLayoutId: z.string().max(20).nullable(),
  unknownAvatarMessage: z.string().max(1000, 'Message too long (max 1000 characters)'),
  offlineMessage: z.string().max(1000, 'Message too long (max 1000 characters)'),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;

