import { z } from 'zod';
export declare const ParameterButtonTypeSchema: z.ZodEnum<["Button", "Slider", "Toggle"]>;
export type ParameterButtonType = z.infer<typeof ParameterButtonTypeSchema>;
