import { BaseDTO, BaseParentIdSchema } from '../shared';
import { z } from 'zod';
import { ClientDTO } from '../profile';

export const InteractionKeySchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    key: z.string().max(16),
});

export type InteractionKeyFormDTO = z.infer<typeof InteractionKeySchema>;

export interface InteractionKeyDTO extends BaseDTO {
    label: string;
    key: string;
    client?: ClientDTO | null;
}
