import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';

export const GroupFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  showLabel: z.boolean(),
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: idSchema.nullable(),
});

export type GroupFormDTO = z.infer<typeof GroupFormSchema>;

export const GroupCopySchema = z.object({
  id: idSchema,
  layoutId: idSchema,
});

export type GroupCopyDTO = z.infer<typeof GroupCopySchema>;
