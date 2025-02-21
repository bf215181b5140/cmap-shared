import { z } from 'zod';
import { idSchema } from '../primitives/shared';
import { parameterValueSchema } from '../primitives/parameter';

export const UseParameterButtonSchema = z.object({
  id: idSchema,
  value: parameterValueSchema,
});

export type UseParameterButtonDTO = z.infer<typeof UseParameterButtonSchema>;
