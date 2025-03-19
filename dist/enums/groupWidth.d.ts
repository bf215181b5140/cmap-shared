import { z } from 'zod';
export declare const GroupWidthSchema: z.ZodEnum<["None", "Third", "Half", "Full"]>;
export type GroupWidth = z.infer<typeof GroupWidthSchema>;
