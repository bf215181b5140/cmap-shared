import { z } from 'zod';

export const UploadedFileSchema = z.object({
  id: z.string(),
  fileName: z.string(),
  urlPath: z.string(),
});

export type UploadedFileDTO = z.infer<typeof UploadedFileSchema>;
