import { ClientSchema } from '../../objects/client';
import { z } from 'zod';

export const LayoutsPageSchema = ClientSchema.required({
  tier: true,
  background: true,
  theme: true,
  interactionKeys: true,
  layouts: true,
});

export type LayoutsPageDTO = z.infer<typeof LayoutsPageSchema>;

