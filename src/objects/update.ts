import { IdSchema } from '../shared';
import { z } from 'zod';

export const UpdateSchema = z.object({
  id: IdSchema,
  version: z.string(),
  download: z.string(),
  description: z.string(),
  date: z.coerce.date(),
});

export type UpdateDTO = z.infer<typeof UpdateSchema>;
