import { ClientSchema } from '../../objects/client';
import { z } from 'zod';

export const ProfilePageSchema = ClientSchema.required({
  image: true,
  tier: true,
  background: true,
  theme: true,
  layouts: true,
  interactionKeys: true,
});

export type ProfilePageDTO = z.infer<typeof ProfilePageSchema>;
