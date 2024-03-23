import { z } from 'zod';
import { BaseIdSchema } from '../shared';

export const AvatarFormSchema = BaseIdSchema.extend({
    vrcId: z.string().min(1, 'Avatar ID required').max(100),
    label: z.string().min(3).max(32),
    default: z.boolean()
});

export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;
