import { z } from 'zod';
export declare const StateParameterSchema: z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>;
export type StateParameterDTO = z.infer<typeof StateParameterSchema>;
export declare const StateParametersSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, z.ZodString]>], null>, "many">;
export type StateParametersDTO = z.infer<typeof StateParametersSchema>;
export declare const StateSchema: z.ZodObject<{
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
export type StateDTO = z.infer<typeof StateSchema>;
