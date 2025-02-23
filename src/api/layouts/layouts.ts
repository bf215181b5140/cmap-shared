import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { BackgroundSchema } from '../../objects/background';
import { ThemeSchema } from '../../objects/theme';
import { LayoutSchema } from '../../objects/layout';
import { AvatarButtonSchema } from '../../objects/avatarButton';
import { InteractionKeySchema } from '../../objects/interactionKey';

export const LayoutsPageSchema = z.object({
  tier: TierSchema,
  background: BackgroundSchema,
  theme: ThemeSchema,
  layouts: z.array(LayoutSchema),
  avatarButtons: z.array(AvatarButtonSchema),
  interactionKeys: z.array(InteractionKeySchema),
});

export type LayoutsPageDTO = z.infer<typeof LayoutsPageSchema>;

