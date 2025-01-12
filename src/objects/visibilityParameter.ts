import { z } from 'zod';
import { VisibilityParameterConditionSchema } from '../enums/visibilityParameterCondition';
import { parameterPathSchema, parameterValueFormSchema, parameterValueSimpleSchema } from '../primitives/parameter';

export const VisibilityParameterFormSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  condition: VisibilityParameterConditionSchema,
});

export type VisibilityParameterFormDTO = z.infer<typeof VisibilityParameterFormSchema>;

export const VisibilityParameterSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema,
  condition: VisibilityParameterConditionSchema,
});

export type VisibilityParameterDTO = z.infer<typeof VisibilityParameterSchema>;
