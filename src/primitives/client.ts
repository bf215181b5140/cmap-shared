import { z } from 'zod';

export const usernameSchema = z.string().regex(/^[a-zA-Z0-9]+$/, 'Only letters and numbers allowed').min(3, 'Username too short').max(16, 'Username too long');
export const passwordSchema = z.string().min(6, 'Password too short').max(32, 'Password too long');
