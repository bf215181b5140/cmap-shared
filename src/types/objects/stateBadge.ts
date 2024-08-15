import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { StateBadgeType } from '../enums/stateBadge';

export const StateBadgeSchema = BaseIdSchema.extend({
    type: z.nativeEnum(StateBadgeType),
    path: z.string(),
    value: z.string(),
    label: z.string(),
    icon: z.string(),
    order: z.number(),
});

export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;
