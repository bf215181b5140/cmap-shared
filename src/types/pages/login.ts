import { z } from 'zod';

export const LoginTokenSchema = z.object({
    apiToken: z.string(),
    displayName: z.string(),
    isAdmin: z.boolean(),
});

export type LoginTokenDTO = z.infer<typeof LoginTokenSchema>;
