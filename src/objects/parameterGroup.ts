import { z } from 'zod';
import { ParameterButtonSchema } from './parameterButton';
import { VisibilityParameterSchema } from './visibilityParameter';
import { BaseGroupSchema } from './baseGroup';

export const ParameterGroupSchema = BaseGroupSchema.extend({
  visibilityParameters: z.array(VisibilityParameterSchema),
  parameterButtons: z.array(ParameterButtonSchema).optional(),
});

export type ParameterGroupDTO = z.infer<typeof ParameterGroupSchema>;
