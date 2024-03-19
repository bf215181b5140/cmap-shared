import { AvatarDto, BackgroundDto, ButtonStyleDto, ClientDto, TierDto } from './index';

export interface ProfilePageDto {
    client: ClientDto;
    backgrounds: BackgroundDto[];
    buttonStyles: ButtonStyleDto[];
}

export interface AvatarsPageDto {
    tier: TierDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}
