import { z } from 'zod';
import { ClientDTO } from '../client';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';

export const ProfileFormSchema = z.object({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    hidden: z.boolean(),
    image: z.any().optional().nullable(),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;

export interface ProfileDTO {
    client?: ClientDTO;
    backgrounds?: BackgroundDTO[];
    buttonStyles?: ButtonStyleDTO[];
}
