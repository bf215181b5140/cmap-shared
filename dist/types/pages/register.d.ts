import { z } from 'zod';
export declare const RegisterInfoSchema: z.ZodObject<{
    available: z.ZodBoolean;
    keyRequired: z.ZodBoolean;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    available: boolean;
    keyRequired: boolean;
    message?: string | undefined;
}, {
    available: boolean;
    keyRequired: boolean;
    message?: string | undefined;
}>;
export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
