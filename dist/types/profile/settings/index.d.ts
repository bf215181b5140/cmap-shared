import { z } from 'zod';
export declare enum UnknownAvatarDisplay {
    None = "none",
    Default = "default"
}
export declare const UnknownAvatarDisplayOptions: {
    key: UnknownAvatarDisplay;
    value: string;
    description: string;
}[];
export declare const ProfileSettingsSchema: z.ZodObject<{
    unknownAvatarDisplay: z.ZodNativeEnum<typeof UnknownAvatarDisplay>;
}, "strip", z.ZodTypeAny, {
    unknownAvatarDisplay: UnknownAvatarDisplay;
}, {
    unknownAvatarDisplay: UnknownAvatarDisplay;
}>;
