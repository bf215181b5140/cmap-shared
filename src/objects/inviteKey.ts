import { BaseIdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';

export const InviteKeySchema = BaseIdSchema.extend({
    key: z.string(),
    tier: TierSchema.optional(),
});

export type InviteKeyDTO = z.infer<typeof InviteKeySchema>;
