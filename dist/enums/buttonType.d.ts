import { z } from 'zod';
export declare const ButtonTypeSchema: z.ZodEnum<["Button", "Slider", "Toggle"]>;
export type ButtonType = z.infer<typeof ButtonTypeSchema>;
