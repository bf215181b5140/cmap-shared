import { z } from 'zod';
import { convertParameterValueFromString } from '../util';

// ------------------- Field schemas ------------------- //
export const IdSchema = z.string().min(1).max(20);

export const usernameSchema = z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
export const passwordSchema = z.string().min(6).max(32);

export const interactionKeySchema = z.string().min(1, 'Key is required').max(16);

// ------------------- Object schemas ------------------- //
export const BaseIdSchema = z.object({
  id: IdSchema
});

export type BaseIdDTO = z.infer<typeof BaseIdSchema>;

export const BaseNullableIdSchema = z.object({
  id: IdSchema.nullable()
});

export type BaseNullableIdDTO = z.infer<typeof BaseNullableIdSchema>;

export const BaseFormSchema = z.object({
  id: IdSchema.nullable(),
  parentId: IdSchema
});

export type BaseFormDTO = z.infer<typeof BaseFormSchema>;

export const OrderSchema = z.array(BaseIdSchema.extend({ order: z.number() }));

export type OrderDTO = z.infer<typeof OrderSchema>;
