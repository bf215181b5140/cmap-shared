import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['info', 'success', 'warning', 'error']);

export type NotificationType = z.infer<typeof NotificationTypeSchema>;
