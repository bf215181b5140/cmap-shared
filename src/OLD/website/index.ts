import { z } from 'zod';
import { IdSchema } from '../../shared';

export const UsedButtonSchema = z.object({
  buttonId: IdSchema,
  value: z.string(),
  // value: parameterValueObjectSchema,
});

export type UsedButtonDTO = z.infer<typeof UsedButtonSchema>;
