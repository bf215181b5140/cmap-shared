import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../shared';

export const LoginSchema = z.object({
    username: usernameSchema,
    password: passwordSchema,
});

export type LoginDTO = z.infer<typeof LoginSchema>;

export interface LoginTokenDTO {
    apiToken: string;
    displayName: string;
}
