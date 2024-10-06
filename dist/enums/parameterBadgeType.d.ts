import { z } from 'zod';
export declare const ParameterBadgeTypeSchema: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
export type ParameterBadgeType = z.infer<typeof ParameterBadgeTypeSchema>;
