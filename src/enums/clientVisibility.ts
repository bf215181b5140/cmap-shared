import { z } from 'zod';

export const ClientVisibilitySchema = z.enum(['Visible', 'Hidden', 'Private']);

export type ClientVisibility = z.infer<typeof ClientVisibilitySchema>;
