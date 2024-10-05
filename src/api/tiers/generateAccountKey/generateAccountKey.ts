import { z } from 'zod';
import { AccountKeySchema } from '../../../objects/accountKey';

export const GeneratedAccountKeySchema = AccountKeySchema.required({
    tier: true
}).extend({
    used: z.boolean(),
});

export type GeneratedAccountKeyDTO = z.infer<typeof GeneratedAccountKeySchema>;