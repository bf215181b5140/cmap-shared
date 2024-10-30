import { BaseIdSchema, parameterPathSchema } from '../../shared';
import { z } from 'zod';

export const UseCostFormSchema = BaseIdSchema.extend({
  useCostEnabled: z.boolean(),
  useCostPath: parameterPathSchema,
  useCostMax: z.number(),
});

export type UseCostFormDTO = z.infer<typeof UseCostFormSchema>;
