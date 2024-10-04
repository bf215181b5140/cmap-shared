import { z } from 'zod';
export declare const ClientVisibilitySchema: z.ZodEnum<["Visible", "Hidden", "Private"]>;
export type ClientVisibility = z.infer<typeof ClientVisibilitySchema>;
