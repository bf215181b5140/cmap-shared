import { ClientSchema } from '../../objects/client';
import { z } from 'zod';
import { BackgroundSchema } from '../../objects/background';
import { ThemeSchema } from '../../objects/theme';

export const StylePageSchema = z.object({
  client: ClientSchema.required({
    tier: true,
    background: true,
    theme: true,
  }),
  backgrounds: z.array(BackgroundSchema.required({
    tier: true,
  })),
  themes: z.array(ThemeSchema.required({
    tier: true,
  })),
});

export type StylePageDTO = z.infer<typeof StylePageSchema>;
