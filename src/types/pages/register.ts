import { z } from 'zod';

export const RegisterInfoSchema = z.object({
    available: z.boolean(),
    keyRequired: z.boolean(),
    message: z.string().optional(),
});

export type RegisterInfoDTO = z.infer<typeof RegisterInfoSchema>;
