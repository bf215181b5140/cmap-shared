import { z } from 'zod';

export const idSchema = z.string().min(1, 'Id required').max(20, 'Id too long');

export const labelOptionalSchema = z.string().max(32, 'Label too long (max 32 characters)');

export const labelRequiredSchema = labelOptionalSchema.min(1, 'Label is required');


