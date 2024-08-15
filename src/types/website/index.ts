import { z } from 'zod';
import { IdSchema, parameterValueObjectSchema } from '../shared';

export const UsedButtonSchema = z.object({
    buttonId: IdSchema,
    value: z.string(),
    // value: parameterValueObjectSchema,
});

export type UsedButtonDTO = z.infer<typeof UsedButtonSchema>;
