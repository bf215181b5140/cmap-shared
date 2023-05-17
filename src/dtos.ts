import { AvatarDto, BackgroundDto, ButtonStyleDto, ClientDto, TierDto } from './index';

export class ProfilePageDto {
    client: ClientDto;
    backgrounds: BackgroundDto[];
    buttonStyles: ButtonStyleDto[];
}

export class AvatarsPageDto {
    tier: TierDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}
