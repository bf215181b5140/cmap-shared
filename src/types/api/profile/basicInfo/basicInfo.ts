import { IdSchema } from '../../../shared';
import { z } from 'zod';
import { ClientVisibility } from '../../../enums/client';

export const BasicInfoFormSchema = z.object({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    visibility: z.nativeEnum(ClientVisibility),
    defaultLayoutId: IdSchema.min(0).nullable(),
    unknownAvatarMessage: z.string().max(1000),
    offlineMessage: z.string().max(1000),
});

export type BasicInfoFormDTO = z.infer<typeof BasicInfoFormSchema>;
