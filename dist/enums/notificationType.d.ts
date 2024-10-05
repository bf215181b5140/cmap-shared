import { z } from 'zod';
export declare const NotificationTypeSchema: z.ZodEnum<["info", "success", "warning", "error"]>;
export type NotificationType = z.infer<typeof NotificationTypeSchema>;
