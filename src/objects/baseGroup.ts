import { z } from 'zod';
import { IdSchema } from '../shared';
import { GroupWidthSchema } from '../enums/groupWidth';

export const BaseGroupSchema = z.object({
  id: IdSchema,
  label: z.string(),
  order: z.number(),
  width: GroupWidthSchema,
  interactionKeyId: z.string().nullable(),
});

export type BaseGroupDTO = z.infer<typeof BaseGroupSchema>;
