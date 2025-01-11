import { z } from 'zod';
export declare const UsedPresetSchema: z.ZodObject<{
    parameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
    }, {
        value: number | boolean;
        path: string;
    }>, "many">;
    callbackParameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
        seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        seconds: number;
    }, {
        value: string;
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
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    exp?: {
        value: number;
        path: string;
    } | undefined;
}, {
    callbackParameters: {
        value: string;
        path: string;
        seconds: number;
    }[];
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    exp?: {
        value: number;
        path: string;
    } | undefined;
}>;
export type UsedPresetDTO = z.infer<typeof UsedPresetSchema>;
