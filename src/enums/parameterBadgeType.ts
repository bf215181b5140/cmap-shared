import { z } from 'zod';

export const ParameterBadgeTypeSchema = z.enum(['Mute', 'VrMode', 'TrackingType', 'Afk', 'Custom']);

export type ParameterBadgeType = z.infer<typeof ParameterBadgeTypeSchema>;
