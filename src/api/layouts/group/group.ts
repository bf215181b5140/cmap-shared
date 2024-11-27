import { z } from 'zod';
import { IdSchema } from '../../../shared';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterSchema } from '../../../objects/visibilityParameter';

export const GroupFormSchema = z.object({
  layoutId: IdSchema,
  id: IdSchema.nullable(),
  label: z.string().min(1, 'Label is required').max(32),
  showLabel: z.boolean(),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: IdSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;

export const GroupCopySchema = z.object({
  id: IdSchema,
  layoutId: IdSchema,
});

export type GroupCopyDTO = z.infer<typeof GroupCopySchema>;
