import { IdSchema } from '../shared';
import { z } from 'zod';
import { GroupSchema } from './group';
import { ParameterBadgeSchema } from './parameterBadge';
import { PresetSchema } from './preset';

export const LayoutSchema = z.object({
  id: IdSchema,
  label: z.string(),
  avatars: z.array(z.string()),
  healthEnabled: z.boolean(),
  healthPath: z.string().nullable(),
  healthMax: z.number().nullable(),
  useCostEnabled: z.boolean(),
  useCostPath: z.string().nullable(),
  useCostMax: z.number().nullable(),
  groups: z.array(GroupSchema).optional(),
  parameterBadges: z.array(ParameterBadgeSchema).optional(),
  presets: z.array(PresetSchema).optional(),
});

export type LayoutDTO = z.infer<typeof LayoutSchema>;
