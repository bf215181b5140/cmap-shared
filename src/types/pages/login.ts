import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../shared';

export const LoginTokenSchema = z.object({
    apiToken: usernameSchema,
    displayName: passwordSchema,
    isAdmin: z.boolean(),
});

export type LoginTokenDTO = z.infer<typeof LoginTokenSchema>;
