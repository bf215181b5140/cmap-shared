import { z } from 'zod';
export declare const VisibilityParameterConditionSchema: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
export type VisibilityParameterCondition = z.infer<typeof VisibilityParameterConditionSchema>;
