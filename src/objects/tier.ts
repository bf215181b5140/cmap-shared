import { z } from 'zod';
import { IdSchema } from '../shared';

export const TierSchema = z.object({
  id: IdSchema,
  rank: z.number(),
  label: z.string(),
  color: z.string(),
  interactionKeys: z.number(),
  layouts: z.number(),
  avatars: z.number(),
  useCost: z.boolean(),
  health: z.boolean(),
  visibilityParameters: z.number(),
  callbackParameters: z.number(),
  parameterBadges: z.number(),
  presets: z.number(),
  groups: z.number(),
  buttons: z.number(),
  inviteKeys: z.number(),
});

export type TierDTO = z.infer<typeof TierSchema>;
