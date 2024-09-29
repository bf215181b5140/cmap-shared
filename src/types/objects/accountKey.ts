import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';

export const AccountKeySchema = BaseIdSchema.extend({
    key: z.string(),
    tier: TierSchema.nullable().optional(),
    used: z.boolean(),
});

export type AccountKeyDTO = z.infer<typeof AccountKeySchema>;
