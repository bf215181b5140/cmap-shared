import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/notificationType';

export const ApiResponseSchema = z.object({
  type: NotificationTypeSchema,
  id: z.string(),
  message: z.string(),
});

export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;
