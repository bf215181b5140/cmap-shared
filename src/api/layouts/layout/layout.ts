import { z } from 'zod';
import { idSchema, labelSchema } from '../../../primitives/shared';
import { parameterPathSchema, parameterValueAvatarIdSchema } from '../../../primitives/parameter';

export const LayoutFormSchema = z.object({
  id: idSchema.nullable(),
  label: labelSchema,
  avatars: z.array(parameterValueAvatarIdSchema),
  healthEnabled: z.boolean(),
  healthPath: parameterPathSchema.nullable(),
  healthMax: z.number().nullable(),
  useCostEnabled: z.boolean(),
  useCostPath: parameterPathSchema.nullable(),
  useCostMax: z.number().nullable(),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;

export const LayoutCopySchema = z.object({
  id: idSchema,
});

export type LayoutCopyDTO = z.infer<typeof LayoutCopySchema>;
