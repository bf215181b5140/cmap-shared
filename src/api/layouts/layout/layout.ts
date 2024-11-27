import { z } from 'zod';
import { IdSchema, parameterPathSchema, vrcAvatarIdSchema } from '../../../shared';

export const LayoutFormSchema = z.object({
  id: IdSchema.nullable(),
  label: z.string().min(3).max(32),
  avatars: z.array(vrcAvatarIdSchema),
  healthEnabled: z.boolean(),
  healthPath: parameterPathSchema.nullable(),
  healthMax: z.number().nullable(),
  useCostEnabled: z.boolean(),
  useCostPath: parameterPathSchema.nullable(),
  useCostMax: z.number().nullable(),
});

export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;

export const LayoutCopySchema = z.object({
  id: IdSchema,
});

export type LayoutCopyDTO = z.infer<typeof LayoutCopySchema>;
