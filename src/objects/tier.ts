import { z } from 'zod';
import { IdSchema } from '../shared';

export const TierSchema = z.object({
  id: IdSchema,
  rank: z.number(),
  label: z.string(),
  color: z.string(),
  layouts: z.number(),
  layoutAvatars: z.number(),
  useCost: z.boolean(),
  health: z.boolean(),
  parameterGroups: z.number(),
  parameterButtons: z.number(),
  presetGroups: z.number(),
  presetButtons: z.number(),
  presetButtonParameters: z.number(),
  parameterBadges: z.number(),
  avatarGroups: z.number(),
  avatarButtons: z.number(),
  visibilityParameters: z.number(),
  callbackParameters: z.number(),
  interactionKeys: z.number(),
  inviteKeys: z.number(),
});

export type TierDTO = z.infer<typeof TierSchema>;
