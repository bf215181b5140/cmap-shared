import { z } from 'zod';
export declare const ControlParameterSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    path: z.ZodString;
    value: z.ZodString;
    seconds: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    value: string;
    label: string;
    path: string;
    seconds: number;
}, {
    id: string;
    value: string;
    label: string;
    path: string;
    seconds: number;
}>;
export type ControlParameterDTO = z.infer<typeof ControlParameterSchema>;
