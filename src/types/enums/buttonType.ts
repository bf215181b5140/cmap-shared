import { z } from 'zod';

export const ButtonTypeSchema = z.enum(['Button', 'Slider', 'Toggle']);

export type ButtonType = z.infer<typeof ButtonTypeSchema>;
