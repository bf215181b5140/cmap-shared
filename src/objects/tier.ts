import { z } from 'zod';
import { BaseIdSchema } from '../shared';

export const TierSchema = BaseIdSchema.extend({
    rank: z.number(),
    label: z.string(),
    color: z.string(),
    interactionKeys: z.number(),
    layouts: z.number(),
    avatars: z.number(),
    useCost: z.boolean(),
    health: z.boolean(),
    controlParameters: z.number(),
    stateBadges: z.number(),
    groups: z.number(),
    buttons: z.number(),
    inviteKeys: z.number(),
});

export type TierDTO = z.infer<typeof TierSchema>;
