import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
import { AvatarDTO } from '../avatar';
import { BaseParentDTO } from '../shared';
import { UploadedFileDTO } from '../files';
import { TierDTO } from '../tier';
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
