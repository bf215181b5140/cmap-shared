import { z } from 'zod';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
import { BaseParentDTO } from '../shared';
import { UploadedFileDTO } from '../files';
import { TierDTO } from '../tier';
export declare const ProfileFormSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    hidden: boolean;
    displayName: string;
    bio: string;
}, {
    hidden: boolean;
    displayName: string;
    bio: string;
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
}
