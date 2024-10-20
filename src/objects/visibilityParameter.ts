import { z } from 'zod';
import { parameterPathSchema, parameterValueSchema } from '../shared';
import { VisibilityParameterConditionSchema } from '../enums/visibilityParameterCondition';

export const VisibilityParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueSchema,
  condition: VisibilityParameterConditionSchema,
});

export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
