import { createHash } from 'crypto';
import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z.string().max(16),
    password: z.string().max(256).transform<string>(val => createHash('sha256').update(val).digest().toString()),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;

export interface LoginTokenDTO {
    apiToken: string;
    displayName: string;
}
