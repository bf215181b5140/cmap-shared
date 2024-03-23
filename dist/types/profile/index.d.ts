import { z } from 'zod';
import { ClientDTO } from '../client';
import { BackgroundDTO } from '../background';
import { ButtonStyleDTO } from '../buttonStyle';
export declare const ProfileFormSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
    image: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    hidden: boolean;
    displayName: string;
    bio: string;
    image?: any;
}, {
    hidden: boolean;
    displayName: string;
    bio: string;
    image?: any;
}>;
export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
export interface ProfileDTO {
    client?: ClientDTO;
    backgrounds?: BackgroundDTO[];
    buttonStyles?: ButtonStyleDTO[];
}
