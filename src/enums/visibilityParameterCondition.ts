import { z } from 'zod';

export const VisibilityParameterConditionSchema = z.enum(['equal', 'not_equal', 'less_than', 'more_than']);

export type VisibilityParameterCondition = z.infer<typeof VisibilityParameterConditionSchema>;
