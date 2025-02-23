import { z } from 'zod';
import { IdSchema } from '../shared';

export const TierSchema = z.object({
  id: IdSchema,
  rank: z.number(),
  label: z.string(),
  color: z.string(),
  interactionKeys: z.number(),
  layouts: z.number(),
  layoutAvatars: z.number(),
  useCost: z.boolean(),
  health: z.boolean(),
  groups: z.number(),
  parameterButtons: z.number(),
  presetButtons: z.number(),
  presetButtonParameters: z.number(),
  parameterBadges: z.number(),
  avatarButtons: z.number(),
  visibilityParameters: z.number(),
  callbackParameters: z.number(),
  inviteKeys: z.number(),
});

export type TierDTO = z.infer<typeof TierSchema>;
