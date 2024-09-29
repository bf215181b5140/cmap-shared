import { z } from 'zod';
export declare const LoginTokenSchema: z.ZodObject<{
    apiToken: z.ZodString;
    displayName: z.ZodString;
    isAdmin: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    apiToken: string;
    isAdmin: boolean;
}, {
    displayName: string;
    apiToken: string;
    isAdmin: boolean;
}>;
export type LoginTokenDTO = z.infer<typeof LoginTokenSchema>;
export declare const LoginFormSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type LoginFormDTO = z.infer<typeof LoginFormSchema>;
