import { z } from 'zod';
export declare const HealthFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    healthEnabled: z.ZodBoolean;
    healthPath: z.ZodString;
    healthMax: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    healthEnabled: boolean;
    healthPath: string;
    healthMax: number;
}, {
    id: string;
    healthEnabled: boolean;
    healthPath: string;
    healthMax: number;
}>;
export type HealthFormDTO = z.infer<typeof HealthFormSchema>;
