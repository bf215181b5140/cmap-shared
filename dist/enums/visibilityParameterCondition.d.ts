import { z } from 'zod';
export declare const VisibilityParameterConditionSchema: z.ZodEnum<["equal", "not_equal", "less_than", "more_than"]>;
export type VisibilityParameterCondition = z.infer<typeof VisibilityParameterConditionSchema>;
