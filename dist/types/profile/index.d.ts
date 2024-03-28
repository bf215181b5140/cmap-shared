import { z } from 'zod';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
import { BaseParentDTO } from '../shared';
import { UploadedFileDTO } from '../files';
import { TierDTO } from '../tier';
import { AvatarDTO } from '../avatar';
export declare const ProfileFormSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}>;
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
    avatars: AvatarDTO[] | null;
}
