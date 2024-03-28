import { z } from 'zod';
export declare const LoginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    password?: string;
}, {
    username?: string;
    password?: string;
}>;
export type LoginDTO = z.infer<typeof LoginSchema>;
export interface LoginTokenDTO {
    apiToken: string;
    displayName: string;
}
