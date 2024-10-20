import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { ButtonSchema } from './button';
import { GroupWidthSchema } from '../enums/groupWidth';
import { VisibilityParameterSchema } from './visibilityParameter';

export const GroupSchema = BaseIdSchema.extend({
    label: z.string(),
    order: z.number(),
    width: GroupWidthSchema,
    visibilityParameters: z.array(VisibilityParameterSchema),
    interactionKeyId: z.string().nullable(),
    buttons: z.array(ButtonSchema).optional(),
});

export type GroupDTO = z.infer<typeof GroupSchema>;
