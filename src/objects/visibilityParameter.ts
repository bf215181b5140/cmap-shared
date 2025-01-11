import { z } from 'zod';
import { VisibilityParameterConditionSchema } from '../enums/visibilityParameterCondition';
import { parameterPathSchema, parameterValueFormSchema } from '../primitives/parameter';

export const VisibilityParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  condition: VisibilityParameterConditionSchema,
});

export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
