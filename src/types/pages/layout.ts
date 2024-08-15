import { z } from 'zod';
import { InteractionKeySchema } from '../objects/interactionKey';
import { TierSchema } from '../objects/tier';
import { LayoutSchema } from '../objects/layout';

export const LayoutPageSchema = z.object({
    layouts: z.array(LayoutSchema),
    tier: TierSchema,
    interactionKeys: z.array(InteractionKeySchema),
});

export type LayoutPageDTO = z.infer<typeof LayoutPageSchema>;
