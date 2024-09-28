import { BaseFormSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { SegmentWidth } from '../../react/types';

export const GroupFormSchema = BaseFormSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(SegmentWidth),
    visibilityParameters: z.array(IdSchema),
    interactionKeyId: IdSchema.min(0).nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
