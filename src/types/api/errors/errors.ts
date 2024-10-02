import { z } from 'zod';
import { NotificationTypeSchema } from '../../enums/notification';

export const ApiResponseSchema = z.object({
    type: NotificationTypeSchema,
    message: z.string(),
});

export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;
