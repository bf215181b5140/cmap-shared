import { BaseParentDTO } from '../shared';
import { TierDTO } from '../tier';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
import { AvatarDTO } from '../avatar';
import { UploadedFileDTO } from '../files';

export interface ClientDTO extends BaseParentDTO<ClientDTO> {
    username?: string;
    displayName?: string;
    bio?: string;
    hidden?: boolean;
    image?: UploadedFileDTO;
    tier?: TierDTO;
    background?: BackgroundDTO;
    buttonStyle?: ButtonStyleDTO;
    avatars?: AvatarDTO[];
}
