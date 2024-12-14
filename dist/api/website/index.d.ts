import { z } from 'zod';
export declare const UsedButtonSchema: z.ZodObject<{
    buttonId: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    buttonId: string;
}, {
    value: string;
    buttonId: string;
}>;
export type UsedButtonDTO = z.infer<typeof UsedButtonSchema>;
