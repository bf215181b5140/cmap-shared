import { AvatarDto, BackgroundDto, ButtonStyleDto, ClientDto, TierDto } from './index';

export class ProfilePageDto {
    client: ClientDto = new ClientDto();
    backgrounds: BackgroundDto[] = [];
    buttonStyles: ButtonStyleDto[] = [];
}

export class AvatarsPageDto {
    tier: TierDto = new TierDto();
    buttonStyle: ButtonStyleDto = new ButtonStyleDto();
    avatars: AvatarDto[] = [];
}
