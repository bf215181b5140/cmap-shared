import { IdSchema } from '../shared';
import { z } from 'zod';

export const InteractionKeySchema = z.object({
  id: IdSchema,
  label: z.string(),
  key: z.string(),
});

export type InteractionKeyDTO = z.infer<typeof InteractionKeySchema>;
