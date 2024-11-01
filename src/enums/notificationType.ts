import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['Info', 'Success', 'Warning', 'Error']);

export type NotificationType = z.infer<typeof NotificationTypeSchema>;
