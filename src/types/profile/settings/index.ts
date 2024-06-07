import { z } from 'zod';

// TODO: WIP, do we need seperate settings section?

export enum UnknownAvatarDisplay {
    None = 'none',
    Default = 'default',
}

export const UnknownAvatarDisplayOptions = [
    {key: UnknownAvatarDisplay.None, value: 'Nothing', description: 'Don\'t show any avatar layouts'},
    {key: UnknownAvatarDisplay.Default, value: 'Default avatar', description: 'Show default avatar layout'},
]

export const ProfileSettingsSchema = z.object({
    unknownAvatarDisplay: z.nativeEnum(UnknownAvatarDisplay),
})
