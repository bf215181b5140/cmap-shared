import { BaseFormSchema, IdSchema, vrcAvatarIdSchema } from '../shared';
import { z } from 'zod';

export const LayoutFormSchema = BaseFormSchema.extend({
    label: z.string().min(3).max(32),
    vrcAvatarId: z.union([z.literal(''), vrcAvatarIdSchema])
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
