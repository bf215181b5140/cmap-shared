import { z } from 'zod';
import { idSchema } from '../primitives/shared';
import { parameterValueSchema } from '../primitives/parameter';

export const UseButtonSchema = z.object({
  id: idSchema,
  value: parameterValueSchema,
});

export type UseButtonDTO = z.infer<typeof UseButtonSchema>;
