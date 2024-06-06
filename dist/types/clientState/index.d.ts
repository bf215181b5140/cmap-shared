import { z } from 'zod';
export declare const ClientStateParamsSchema: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>], null>, "many">;
export declare const ClientStateParamFormSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string | number | boolean, string>;
}, "strip", z.ZodTypeAny, {
    value: string | number | boolean;
    path: string;
}, {
    value: string;
    path: string;
}>;
export declare const ClientStateParamSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: string | number | boolean;
    path: string;
}, {
    value: string | number | boolean;
    path: string;
}>;
export type ClientStateParamsDTO = z.infer<typeof ClientStateParamsSchema>;
export type ClientStateParamFormDTO = z.infer<typeof ClientStateParamFormSchema>;
export type ClientStateParamDTO = z.infer<typeof ClientStateParamSchema>;
export interface ClientStateDTO {
    isConnected: boolean;
    isOnVrchat: boolean | null;
    parameters: ClientStateParamsDTO;
}
