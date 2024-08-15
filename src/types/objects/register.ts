import { z } from 'zod';

export const RegisterInfoSchema = z.object({
    available: z.boolean(),
    keyRequired: z.boolean(),
});

export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
