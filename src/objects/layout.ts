import { IdSchema } from '../shared';
import { z } from 'zod';
import { ParameterGroupSchema } from './parameterGroup';
import { ParameterBadgeSchema } from './parameterBadge';
import { PresetGroupSchema } from './presetGroup';

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
  parameterGroups: z.array(ParameterGroupSchema).optional(),
  presetGroups: z.array(PresetGroupSchema).optional(),
  parameterBadges: z.array(ParameterBadgeSchema).optional(),
});

export type LayoutDTO = z.infer<typeof LayoutSchema>;
