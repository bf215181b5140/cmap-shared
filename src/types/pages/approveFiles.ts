import { z } from 'zod';
import { UploadedFileSchema } from '../objects/uploadedFile';

// ------------------- Page ------------------- //
export const ApproveFilesPageSchema = z.array(UploadedFileSchema);

export type ApproveFilesPageDTO = z.infer<typeof ApproveFilesPageSchema>;
