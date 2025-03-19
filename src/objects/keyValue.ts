import { z } from 'zod';

export const KeyValueSchema = z.object({
  key: z.string(),
  value: z.string(),
});

export type KeyValueDTO = z.infer<typeof KeyValueSchema>;