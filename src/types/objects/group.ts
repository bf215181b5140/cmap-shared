import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { ButtonSchema } from './button';
import { SegmentWidth } from '../../react/types';
import { ControlParameterSchema } from './controlParameter';

export const GroupSchema = BaseIdSchema.extend({
    label: z.string(),
    order: z.number(),
    width: z.nativeEnum(SegmentWidth),
    visibilityParameters: z.array(ControlParameterSchema).optional(),
    interactionKeyId: z.string().nullable(),
    buttons: z.array(ButtonSchema).optional(),
});

export type GroupDTO = z.infer<typeof GroupSchema>;
