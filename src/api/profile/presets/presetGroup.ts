import { z } from 'zod';
import { GroupWidthSchema } from '../../../enums/groupWidth';
import { idSchema, labelOptionalSchema } from '../../../primitives/shared';
import { VisibilityParameterFormSchema } from '../../../objects/visibilityParameter';

export const PresetGroupFormSchema = z.object({
  layoutId: idSchema,
  id: idSchema.nullable(),
  label: labelOptionalSchema,
  order: z.number(),
  width: GroupWidthSchema,
  visibilityParameters: z.array(VisibilityParameterFormSchema),
  interactionKeyId: idSchema.nullable(),
});

export type PresetGroupFormDTO = z.infer<typeof PresetGroupFormSchema>;

export const PresetGroupCopySchema = z.object({
  layoutId: idSchema,
  id: idSchema,
});

export type PresetGroupCopyDTO = z.infer<typeof PresetGroupCopySchema>;
