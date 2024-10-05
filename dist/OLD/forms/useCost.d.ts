import { z } from 'zod';
export declare const UseCostFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    useCostEnabled: z.ZodBoolean;
    useCostPath: z.ZodString;
    useCostMax: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    useCostEnabled: boolean;
    useCostPath: string;
    useCostMax: number;
}, {
    id: string;
    useCostEnabled: boolean;
    useCostPath: string;
    useCostMax: number;
}>;
export type UseCostFormDTO = z.infer<typeof UseCostFormSchema>;
