import { z } from 'zod';
import { IdSchema } from '../shared';

export const UploadFileFormSchema = z.object({
    parentType: z.union([z.literal('client'), z.literal('button')]),
    parentId: IdSchema,
    file: z.any(),
});

export type UploadFileFormDTO = z.infer<typeof UploadFileFormSchema>;
