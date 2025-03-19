import { z } from 'zod';
export declare const DetectedGamesSchema: z.ZodNullable<z.ZodArray<z.ZodEnum<["VRChat", "ChilloutVR"]>, "many">>;
export type DetectedGamesDTO = z.infer<typeof DetectedGamesSchema>;
