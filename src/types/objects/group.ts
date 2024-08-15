import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { ButtonSchema } from './button';
import { ContentBoxWidth } from '../../react';

export const GroupSchema = BaseIdSchema.extend({
    label: z.string(),
    order: z.number(),
    width: z.nativeEnum(ContentBoxWidth),
    interactionKeyId: z.string().nullable(),
    buttons: z.array(ButtonSchema).optional(),
});

export type GroupDTO = z.infer<typeof GroupSchema>;
