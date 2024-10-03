import { z } from 'zod';
export declare const ClientStateParameterSchema: z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>;
export type ClientStateParameterDTO = z.infer<typeof ClientStateParameterSchema>;
export declare const ClientStateParametersSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
export type ClientStateParametersDTO = z.infer<typeof ClientStateParametersSchema>;
export declare const ClientStateSchema: z.ZodObject<{
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
export type ClientStateDTO = z.infer<typeof ClientStateSchema>;
