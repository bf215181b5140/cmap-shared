import { BaseIdSchema } from '../shared';
import { z } from 'zod';

export const ControlParameterSchema = BaseIdSchema.extend({
    label: z.string(),
    path: z.string(),
    value: z.string(),
    seconds: z.number(),
});

export type ControlParameterDTO = z.infer<typeof ControlParameterSchema>;
