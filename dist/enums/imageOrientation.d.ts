import { z } from 'zod';
export declare const ImageOrientationSchema: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
export type ImageOrientation = z.infer<typeof ImageOrientationSchema>;
