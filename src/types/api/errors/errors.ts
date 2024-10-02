import { z } from 'zod';
import { NotificationType, NotificationTypeSchema } from '../../enums/notification';

export const ApiResponseSchema = z.object({
    type: NotificationTypeSchema,
    message: z.string(),
});

export type ApiResponseDTO = z.infer<typeof ApiResponseSchema>;

export class ApiError extends Error implements ApiResponseDTO {
    type: NotificationType;
    name: string = 'ApiResponse';

    constructor(type: NotificationType, message: string) {
        super(message);
        this.type = type;
    }
}

