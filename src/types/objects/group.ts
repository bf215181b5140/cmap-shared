import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { GroupWidth } from '../enums/group';
import { ButtonSchema } from './button';

export const GroupSchema = BaseIdSchema.extend({
    label: z.string(),
    order: z.number(),
    width: z.nativeEnum(GroupWidth),
    interactionKeyId: z.string().nullable(),
    buttons: z.array(ButtonSchema).optional(),
});

export type GroupDTO = z.infer<typeof GroupSchema>;
