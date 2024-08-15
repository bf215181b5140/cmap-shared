import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';

export const RegistrationKeySchema = BaseIdSchema.extend({
    key: z.string(),
    tier: TierSchema.nullable().optional(),
    used: z.boolean(),
});

export type RegistrationKeyDTO = z.infer<typeof RegistrationKeySchema>;
