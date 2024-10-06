import { z } from 'zod';
import { InviteKeySchema } from '../../../objects/inviteKey';

export const GeneratedInviteKeySchema = InviteKeySchema.required({
    tier: true
}).extend({
    used: z.boolean(),
});

export type GeneratedInviteKeyDTO = z.infer<typeof GeneratedInviteKeySchema>;