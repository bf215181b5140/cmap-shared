import { z } from 'zod';
export declare const UsedParameterButtonSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    callbackParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
        seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
        seconds: number;
    }, {
        value: number | boolean;
        path: string;
        seconds: number;
    }>, "many">;
    exp: z.ZodOptional<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        path: string;
    }, {
        value: number;
        path: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
    callbackParameters: {
        value: number | boolean;
        path: string;
        seconds: number;
    }[];
    exp?: {
        value: number;
        path: string;
    } | undefined;
}, {
    value: number | boolean;
    path: string;
    callbackParameters: {
        value: number | boolean;
        path: string;
        seconds: number;
    }[];
    exp?: {
        value: number;
        path: string;
    } | undefined;
}>;
export type UsedParameterButtonDTO = z.infer<typeof UsedParameterButtonSchema>;
