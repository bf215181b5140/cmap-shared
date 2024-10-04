import { z } from 'zod';
export declare const StateBadgeTypeSchema: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Message", "Display"]>;
export type StateBadgeType = z.infer<typeof StateBadgeTypeSchema>;
