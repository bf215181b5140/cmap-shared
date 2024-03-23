import { AvatarDto, BackgroundDto, ButtonStyleDto, TierDto, UploadedFileDTO } from '../../../index';
import { BaseParentDTO } from '../index';
export declare class ClientDTO extends BaseParentDTO<ClientDTO> {
    username?: string;
    displayName?: string;
    bio?: string;
    hidden?: boolean;
    image?: UploadedFileDTO;
    tier?: TierDto;
    background?: BackgroundDto;
    buttonStyle?: ButtonStyleDto;
    avatars?: AvatarDto[];
}
