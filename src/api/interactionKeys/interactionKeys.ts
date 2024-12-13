import { z } from 'zod';
import { IdSchema } from '../../shared';
import { ClientSchema } from '../../objects/client';

export const InteractionKeysPageSchema = ClientSchema.required({
  tier: true,
  interactionKeys: true,
});

export type InteractionKeysPageDTO = z.infer<typeof InteractionKeysPageSchema>;

export const InteractionKeysFormSchema = z.object({
  interactionKeys: z.array(z.object({
    id: IdSchema.nullable(),
    label: z.string().min(1, 'Label is required').max(32),
    key: z.string().min(1, 'Key is required').max(16),
  })),
});

export type InteractionKeysFormDTO = z.infer<typeof InteractionKeysFormSchema>;
