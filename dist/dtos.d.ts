import { AvatarDto, BackgroundDto, ButtonStyleDto, ClientDto, TierDto } from './index';
export declare class ProfilePageDto {
    client: ClientDto;
    backgrounds: BackgroundDto[];
    buttonStyles: ButtonStyleDto[];
}
export declare class AvatarsPageDto {
    tier: TierDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}
