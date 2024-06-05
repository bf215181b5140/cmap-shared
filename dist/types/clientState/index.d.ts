import { z } from 'zod';
export declare const ClientStateParamsSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>], null>, "many">;
export declare const ClientStateParamSchema: z.ZodObject<{
    parameter: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    value: string;
    parameter: string;
}, {
    value: string;
    parameter: string;
}>;
export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;
export type ClientStateParamDTO = z.infer<typeof ClientStateParamSchema>;
export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
