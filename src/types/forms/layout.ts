import { BaseNullableIdSchema, vrcAvatarIdSchema } from '../shared';
import { z } from 'zod';

export const LayoutFormSchema = BaseNullableIdSchema.extend({
    label: z.string().min(3).max(32),
    avatars: z.array(vrcAvatarIdSchema),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
