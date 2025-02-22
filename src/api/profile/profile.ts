import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { BackgroundSchema } from '../../objects/background';
import { ThemeSchema } from '../../objects/theme';
import { LayoutSchema } from '../../objects/layout';
import { AvatarGroupSchema } from '../../objects/avatarGroup';
import { InteractionKeySchema } from '../../objects/interactionKey';

export const ProfilePageSchema = z.object({
  tier: TierSchema,
  background: BackgroundSchema,
  theme: ThemeSchema,
  layouts: z.array(LayoutSchema),
  avatarGroups: z.array(AvatarGroupSchema),
  interactionKeys: z.array(InteractionKeySchema),
});

export type ProfilePageDTO = z.infer<typeof ProfilePageSchema>;

