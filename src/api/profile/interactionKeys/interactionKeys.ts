import { z } from 'zod';
import { IdSchema } from '../../../shared';

export const InteractionKeysFormSchema = z.object({
  interactionKeys: z.array(z.object({
    id: IdSchema.nullable(),
    label: z.string().min(1).max(32),
    key: z.string().min(1).max(16),
  })),
});

export type InteractionKeysFormDTO = z.infer<typeof InteractionKeysFormSchema>;
