import { IdSchema } from '../shared';
import { z } from 'zod';
import { ParameterBadgeTypeSchema } from '../enums/parameterBadgeType';

export const ParameterBadgeSchema = z.object({
  id: IdSchema,
  type: ParameterBadgeTypeSchema,
  path: z.string(),
  value: z.string(),
  label: z.string(),
  icon: z.string(),
  order: z.number(),
});

export type ParameterBadgeDTO = z.infer<typeof ParameterBadgeSchema>;
