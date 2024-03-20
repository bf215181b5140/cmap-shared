import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z.string().max(16),
    password: z.string().max(32),
});

export const LoginSchema = z.object({
    username: z.string().max(16),
    password: z.string().max(256),
});

export type LoginDTO = z.infer<typeof LoginSchema>;

export interface LoginTokenDTO {
    apiToken: string;
    displayName: string;
}
