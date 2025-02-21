import { IdSchema } from '../shared';
import { z } from 'zod';
import { ParameterButtonSchema } from './parameterButton';
import { GroupWidthSchema } from '../enums/groupWidth';
import { VisibilityParameterSchema } from './visibilityParameter';

export const GroupSchema = z.object({
  id: IdSchema,
  label: z.string(),
  showLabel: z.boolean(),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: z.string().nullable(),
  parameterButtons: z.array(ParameterButtonSchema).optional(),
});

export type GroupDTO = z.infer<typeof GroupSchema>;
