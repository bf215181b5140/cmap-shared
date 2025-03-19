import { z } from 'zod';

export const VisibilityParameterConditionSchema = z.enum(['Equal', 'Not_equal', 'Less_than', 'More_than']);

export type VisibilityParameterCondition = z.infer<typeof VisibilityParameterConditionSchema>;
