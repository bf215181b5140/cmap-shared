import { z } from 'zod';
import { InteractionKeySchema } from '../../objects/interactionKey';
import { TierSchema } from '../../objects/tier';
import { LayoutSchema } from '../../objects/layout';
import { BackgroundSchema } from '../../objects/background';
import { StyleSchema } from '../../objects/style';

export const LayoutPageSchema = z.object({
    layouts: z.array(LayoutSchema),
    tier: TierSchema,
    backgroud: BackgroundSchema,
    style: StyleSchema,
    interactionKeys: z.array(InteractionKeySchema),
});

export type LayoutPageDTO = z.infer<typeof LayoutPageSchema>;
