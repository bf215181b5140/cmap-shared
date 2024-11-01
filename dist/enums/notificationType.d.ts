import { z } from 'zod';
export declare const NotificationTypeSchema: z.ZodEnum<["Info", "Success", "Warning", "Error"]>;
export type NotificationType = z.infer<typeof NotificationTypeSchema>;
