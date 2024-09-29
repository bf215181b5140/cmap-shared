import { ClientSchema } from '../../objects/client';
import { z } from 'zod';

export const ProfileSchema = ClientSchema.required({
    image: true,
    tier: true,
    background: true,
    style: true,
    layouts: true,
    interactionKeys: true,
});

export type ProfileDTO = z.infer<typeof ProfileSchema>;
