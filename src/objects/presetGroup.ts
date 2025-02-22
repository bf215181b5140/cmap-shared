import { z } from 'zod';
import { VisibilityParameterSchema } from './visibilityParameter';
import { BaseGroupSchema } from './baseGroup';
import { PresetButtonSchema } from './presetButton';

export const PresetGroupSchema = BaseGroupSchema.extend({
  visibilityParameters: z.array(VisibilityParameterSchema),
  presetButtons: z.array(PresetButtonSchema).optional(),
});

export type PresetGroupDTO = z.infer<typeof PresetGroupSchema>;
