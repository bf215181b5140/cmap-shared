import { z } from 'zod';
export declare const ClientStateSchema: z.ZodObject<{
    isConnected: z.ZodBoolean;
    isOnVrchat: z.ZodNullable<z.ZodBoolean>;
    parameters: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
}, "strip", z.ZodTypeAny, {
    isConnected: boolean;
    parameters: [string, string | number | boolean][];
    isOnVrchat: boolean | null;
}, {
    isConnected: boolean;
    parameters: [string, string | number | boolean][];
    isOnVrchat: boolean | null;
}>;
export type ClientStateDTO = z.infer<typeof ClientStateSchema>;
