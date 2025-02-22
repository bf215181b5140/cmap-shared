import { z } from 'zod';
import { IdSchema, interactionKeySchema } from '../../../shared';
import { ClientSchema } from '../../../objects/client';
import { labelRequiredSchema } from '../../../primitives/shared';

export const InteractionKeysFormSchema = z.object({
  interactionKeys: z.array(z.object({
    id: IdSchema.nullable(),
    label: labelRequiredSchema,
    key: z.string().min(1, 'Key is required').max(16, 'Key too long (max 16 characters)'),
  })),
});

export type InteractionKeysFormDTO = z.infer<typeof InteractionKeysFormSchema>;
