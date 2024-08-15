import { z } from 'zod';
import { IdSchema } from '../shared';

export const BackgroundFormSchema = z.object({
    parentId: IdSchema,
    id: IdSchema,
});

export type BackgroundFormDTO = z.infer<typeof BackgroundFormSchema>;
