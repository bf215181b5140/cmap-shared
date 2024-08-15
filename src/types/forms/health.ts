import { BaseIdSchema, parameterPathSchema } from '../shared';
import { z } from 'zod';

export const HealthFormSchema = BaseIdSchema.extend({
    healthEnabled: z.boolean(),
    healthPath: parameterPathSchema,
    healthMax: z.number(),
});

export type HealthFormDTO = z.infer<typeof HealthFormSchema>;
