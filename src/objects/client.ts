import { IdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';
import { LayoutSchema } from './layout';
import { UploadedFileSchema } from './uploadedFile';
import { InteractionKeySchema } from './interactionKey';
import { BackgroundSchema } from './background';
import { ThemeSchema } from './theme';
import { ClientVisibilitySchema } from '../enums/clientVisibility';
import { AvatarGroupSchema } from './avatarGroup';

export const ClientSchema = z.object({
  id: IdSchema,
  username: z.string(),
  displayName: z.string(),
  bio: z.string(),
  visibility: ClientVisibilitySchema,
  defaultLayoutId: IdSchema.nullable(),
  unknownAvatarMessage: z.string(),
  offlineMessage: z.string(),
  image: UploadedFileSchema.nullable().optional(),
  tier: TierSchema.optional(),
  background: BackgroundSchema.optional(),
  theme: ThemeSchema.optional(),
  layouts: z.array(LayoutSchema).optional(),
  avatarGroups: z.array(AvatarGroupSchema).optional(),
  interactionKeys: z.array(InteractionKeySchema).optional(),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
