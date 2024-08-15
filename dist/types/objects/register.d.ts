import { z } from 'zod';
export declare const RegisterInfoSchema: z.ZodObject<{
    available: z.ZodBoolean;
    keyRequired: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    available: boolean;
    keyRequired: boolean;
}, {
    available: boolean;
    keyRequired: boolean;
}>;
export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
