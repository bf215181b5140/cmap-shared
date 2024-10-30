import { z } from 'zod';
import { IdSchema } from '../../../shared';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterSchema } from '../../../objects/visibilityParameter';

export const GroupFormSchema = z.object({
  layoutId: IdSchema,
  id: IdSchema.nullable(),
  label: z.string().max(32),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: IdSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
