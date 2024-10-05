import { z } from 'zod';
export declare const KeyValueSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
    value: string;
}, {
    key: string;
    value: string;
}>;
export type KeyValueDTO = z.infer<typeof KeyValueSchema>;
