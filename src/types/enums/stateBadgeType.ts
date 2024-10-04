import { z } from 'zod';

export const StateBadgeTypeSchema = z.enum(['Mute', 'VrMode', 'TrackingType', 'Afk', 'Message', 'Display']);

export type StateBadgeType = z.infer<typeof StateBadgeTypeSchema>;
