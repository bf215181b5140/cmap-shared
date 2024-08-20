import { z } from 'zod';
export declare const RegisterInfoSchema: z.ZodObject<{
    available: z.ZodBoolean;
    keyRequired: z.ZodBoolean;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    available: boolean;
    keyRequired: boolean;
}, {
    message: string;
    available: boolean;
    keyRequired: boolean;
}>;
export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
