import { z } from 'zod';
import { ContentBoxWidth } from '../../../index';
import { BaseParentIdSchema } from '../shared';

export const LayoutFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(ContentBoxWidth),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
