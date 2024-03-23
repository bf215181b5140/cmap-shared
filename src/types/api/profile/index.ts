import { z } from 'zod';
import { ClientDTO } from '../../dto/client';
import { BackgroundDTO } from '../../dto/background';
import { ButtonStyleDTO } from '../../dto/buttonStyle';

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
