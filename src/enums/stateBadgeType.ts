import { z } from 'zod';

export const StateBadgeTypeSchema = z.enum(['Mute', 'VrMode', 'TrackingType', 'Afk', 'Custom']);

export type StateBadgeType = z.infer<typeof StateBadgeTypeSchema>;
