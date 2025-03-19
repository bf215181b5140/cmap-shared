import { z } from 'zod';

export const DetectedGameSchema = z.enum(['VRChat', 'ChilloutVR']);

export type DetectedGame = z.infer<typeof DetectedGameSchema>;
