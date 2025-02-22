import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';

export const ParameterGroupFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: idSchema.nullable(),
});

export type ParameterGroupFormDTO = z.infer<typeof ParameterGroupFormSchema>;

export const ParameterGroupCopySchema = z.object({
  layoutId: idSchema,
  id: idSchema,
});

export type ParameterGroupCopyDTO = z.infer<typeof ParameterGroupCopySchema>;
