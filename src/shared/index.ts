import { z } from 'zod';
import { convertParameterValueFromString } from '../util';

// ------------------- Field schemas ------------------- //
export const IdSchema = z.string().min(1).max(20);

export const usernameSchema = z.string().regex(/^[a-zA-Z0-9]+$/, { message: 'Only letters and numbers allowed' }).min(3).max(16);
export const passwordSchema = z.string().min(6).max(32);

export const vrcAvatarIdSchema = z.string().min(6, 'Invalid VRChat avatar ID').startsWith('avtr_', 'Invalid VRChat avatar ID').max(50);

export const parameterPathSchema = z.string().min(1, 'Parameter path required').max(100);
export const parameterValueSchema = z.string().min(1, 'Parameter value required').max(5)
  .refine((val) => convertParameterValueFromString(val) !== undefined, { message: 'Invalid value, must be either number or bool' });

export const parameterValueObjectSchema = z.union([z.number(), z.boolean()]);

export const parameterValueOrAvatarSchema = z.union([parameterValueSchema, vrcAvatarIdSchema]);
export const parameterValueObjectOrAvatarSchema = z.union([parameterValueObjectSchema, vrcAvatarIdSchema]);

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
