import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { GroupSchema } from './group';
import { ControlParameterSchema, } from './controlParameter';
import { ParameterBadgeSchema } from './parameterBadge';

export const LayoutSchema = BaseIdSchema.extend({
    label: z.string(),
    avatars: z.array(z.string()),
    healthEnabled: z.boolean(),
    healthPath: z.string().nullable(),
    healthMax: z.number().nullable(),
    useCostEnabled: z.boolean(),
    useCostPath: z.string().nullable(),
    useCostMax: z.number().nullable(),
    groups: z.array(GroupSchema).optional(),
    controlParameters: z.array(ControlParameterSchema).optional(),
    parameterBadges: z.array(ParameterBadgeSchema).optional(),
});

export type LayoutDTO = z.infer<typeof LayoutSchema>;
