import { z } from 'zod';
import { IdSchema } from '../shared';

export const StyleFormSchema = z.object({
    parentId: IdSchema,
    id: IdSchema,
});

export type StyleFormDTO = z.infer<typeof StyleFormSchema>;
