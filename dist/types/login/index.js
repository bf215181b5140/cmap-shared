import { z } from 'zod';
export const LoginSchema = z.object({
    username: z.string().min(3).max(16),
    password: z.string().min(6).max(32),
});
