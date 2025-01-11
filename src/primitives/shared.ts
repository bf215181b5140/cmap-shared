import { z } from 'zod';

export const idSchema = z.string().min(1, 'Id required').max(20, 'Id too long');

export const labelSchema = z.string().min(1, 'Label is required').max(32, 'Label too long (max 32 characters)');


