import { z } from 'zod';

export const ImageOrientationSchema = z.enum(['Horizontal', 'Square', 'Vertical']);

export type ImageOrientation = z.infer<typeof ImageOrientationSchema>;
