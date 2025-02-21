import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { ThemeSchema } from '../../objects/theme';
import { InteractionKeySchema } from '../../objects/interactionKey';
import { AvatarButtonSchema } from '../../objects/avatarButton';

export const AvatarButtonsPageSchema = z.object({
  tier: TierSchema,
  theme: ThemeSchema,
  avatarButtons: z.array(AvatarButtonSchema),
  interactionKeys: z.array(InteractionKeySchema),
});

export type AvatarButtonsPageDTO = z.infer<typeof AvatarButtonsPageSchema>;
