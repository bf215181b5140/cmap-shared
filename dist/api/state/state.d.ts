import { z } from 'zod';
export declare const StatePageSchema: z.ZodObject<{
    isConnected: z.ZodBoolean;
    isOnVrchat: z.ZodNullable<z.ZodBoolean>;
    parameters: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
}, "strip", z.ZodTypeAny, {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: [string, string | number | boolean][];
}, {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: [string, string | number | boolean][];
}>;
export type StatePageDTO = z.infer<typeof StatePageSchema>;
