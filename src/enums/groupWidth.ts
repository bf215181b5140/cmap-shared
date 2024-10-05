import { z } from 'zod';

export const GroupWidthSchema = z.enum(['None', 'Third', 'Half', 'Full']);

export type GroupWidth = z.infer<typeof GroupWidthSchema>;
