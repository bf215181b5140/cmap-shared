import { ClientSchema } from '../../objects/client';
import { z } from 'zod';

export const GetProfileSchema = ClientSchema.required({
    image: true,
    tier: true,
    background: true,
    style: true,
    layouts: true,
    interactionKeys: true,
});

export type GetProfileDTO = z.infer<typeof GetProfileSchema>;
