import { BaseIdSchema } from '../shared';
import { BackgroundSchema } from './background';
import { z } from 'zod';
import { GroupSchema } from './group';
import { CallbackSchema, } from './callback';
import { StyleSchema } from './style';
import { StateBadgeSchema } from './stateBadge';

export const LayoutSchema = BaseIdSchema.extend({
    label: z.string(),
    avatars: z.array(z.string()),
    backgroud: BackgroundSchema.optional(),
    style: StyleSchema.optional(),
    healthEnabled: z.boolean(),
    healthPath: z.string().nullable(),
    healthMax: z.number().nullable(),
    useCostEnabled: z.boolean(),
    useCostPath: z.string().nullable(),
    useCostMax: z.number().nullable(),
    groups: z.array(GroupSchema).optional(),
    callbacks: z.array(CallbackSchema).optional(),
    stateBadges: z.array(StateBadgeSchema).optional(),
});

export type LayoutDTO = z.infer<typeof LayoutSchema>;
