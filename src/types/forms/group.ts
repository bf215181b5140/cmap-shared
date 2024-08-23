import { BaseFormSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { ContentBoxWidth } from '../../react/types';

export const GroupFormSchema = BaseFormSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(ContentBoxWidth),
    interactionKeyId: IdSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
