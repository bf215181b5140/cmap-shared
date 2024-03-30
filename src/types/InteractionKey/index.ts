import { BaseDTO, BaseIdSchema } from '../shared';
import { z } from 'zod';
import { ClientDTO } from '../profile';

export const InteractionKeySchema = BaseIdSchema.extend({
    label: z.string().max(32),
    key: z.string().max(16),
});

export const InteractionKeyFormSchema = z.object({
    clientId: z.string().min(1).max(20),
    interactionKeys: z.array(InteractionKeySchema).max(16),
});

export type InteractionKeyFormDTO = z.infer<typeof InteractionKeyFormSchema>;

export interface InteractionKeyDTO extends BaseDTO {
    label: string;
    key: string;
    client?: ClientDTO | null;
}
