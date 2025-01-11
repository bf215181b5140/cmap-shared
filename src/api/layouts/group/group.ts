import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterSchema } from '../../../objects/visibilityParameter';
import { idSchema, labelSchema } from '../../../primitives/shared';

export const GroupFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelSchema,
  showLabel: z.boolean(),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterSchema),
  interactionKeyId: idSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;

export const GroupCopySchema = z.object({
  id: idSchema,
  layoutId: idSchema,
});

export type GroupCopyDTO = z.infer<typeof GroupCopySchema>;
