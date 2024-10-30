import { BaseFormSchema, IdSchema } from '../../shared';
import { z } from 'zod';
import { GroupWidthSchema } from '../../enums/groupWidth';

export const GroupFormSchema = BaseFormSchema.extend({
  label: z.string().max(32),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(IdSchema),
  interactionKeyId: IdSchema.min(0).nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
