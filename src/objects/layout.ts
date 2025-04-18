import { IdSchema } from '../shared';
import { z } from 'zod';
import { GroupSchema } from './group';
import { ParameterBadgeSchema } from './parameterBadge';
import { PresetButtonSchema } from './presetButton';

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
  customPresetsEnabled: z.boolean(),
  customPresetsWhitelist: z.array(z.string()),
  customPresetsBlacklist: z.array(z.string()),
  groups: z.array(GroupSchema).optional(),
  parameterBadges: z.array(ParameterBadgeSchema).optional(),
  presetButtons: z.array(PresetButtonSchema).optional(),
});

export type LayoutDTO = z.infer<typeof LayoutSchema>;
