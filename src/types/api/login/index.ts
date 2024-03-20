import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z.string().min(3).max(16),
    password: z.string().min(6).max(32),
});

export const LoginSchema = z.object({
    username: z.string().min(3).max(16),
    password: z.string().min(6).max(64),
});

export type LoginDTO = z.infer<typeof LoginSchema>;

export interface LoginTokenDTO {
    apiToken: string;
    displayName: string;
}
