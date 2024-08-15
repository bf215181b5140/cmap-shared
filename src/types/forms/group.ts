import { BaseFormSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { GroupWidth } from '../enums/group';

export const GroupFormSchema = BaseFormSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(GroupWidth),
    interactionKeyId: IdSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
