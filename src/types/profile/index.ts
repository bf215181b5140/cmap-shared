import { z } from 'zod';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
import { BaseParentDTO } from '../shared';
import { UploadedFileDTO } from '../files';
import { TierDTO } from '../tier';

export const ProfileFormSchema = z.object({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    hidden: z.boolean(),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;

export interface ProfileDTO {
    client: ClientDTO;
    backgrounds: BackgroundDTO[];
    buttonStyles: ButtonStyleDTO[];
}

export interface ClientDTO extends BaseParentDTO<ClientDTO> {
    username: string;
    displayName: string;
    bio: string;
    hidden: boolean;
    image: UploadedFileDTO | null;
    tier: TierDTO;
    background: BackgroundDTO;
    buttonStyle: ButtonStyleDTO;
}
