import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { StateBadgeTypeSchema } from '../enums/stateBadgeType';

export const StateBadgeSchema = BaseIdSchema.extend({
    type: StateBadgeTypeSchema,
    path: z.string(),
    value: z.string(),
    label: z.string(),
    icon: z.string(),
    order: z.number(),
});

export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;
