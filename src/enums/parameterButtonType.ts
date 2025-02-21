import { z } from 'zod';

export const ParameterButtonTypeSchema = z.enum(['Button', 'Slider', 'Toggle']);

export type ParameterButtonType = z.infer<typeof ParameterButtonTypeSchema>;
