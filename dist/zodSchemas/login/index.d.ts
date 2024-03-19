import { z } from 'zod';
export declare const LoginFormSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    username?: string;
    password?: string;
}, {
    username?: string;
    password?: string;
}>;
export type LoginForm = z.infer<typeof LoginFormSchema>;
