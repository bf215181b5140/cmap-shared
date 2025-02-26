import { z } from 'zod';
export declare const DetectedGameSchema: z.ZodEnum<["VRChat", "ChilloutVR"]>;
export type DetectedGame = z.infer<typeof DetectedGameSchema>;
