import { z } from 'zod';
import { convertParameterValueFromString } from '../util';

// todo - these aren't used yet, just for testing

export const parameterPathSchema = z.string().min(1, 'Parameter path required').max(100, 'Parameter path too long');

export const parameterValueAvatarIdSchema = z.string().min(6, 'Too short for VRChat avatar ID').max(50, 'Too long for VRChat avatar ID').startsWith('avtr_', 'Invalid VRChat avatar ID');

export const parameterValueStringSchema = z.string().min(1, 'Parameter value required').max(5, 'Parameter value too long').transform((val, ctx) => {
  const convertedValue = convertParameterValueFromString(val);
  if (convertedValue === undefined) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Invalid value, must be either number or bool (true/false)',
    });
    return z.NEVER;
  }
  return convertedValue;
});

export const parameterValueNumberSchema = z.number().min(-9999, 'Parameter value too long').max(99999, 'Parameter value too long').transform((val) => {
  if (Number.isInteger(val)) return val;
  return Math.floor(val * 1000) / 1000;
});

export const parameterValueSchema = z.union([
  parameterValueNumberSchema,
  z.boolean()
]);

export const parameterValueFormSchema = z.union([
  parameterValueStringSchema,
  parameterValueNumberSchema,
  z.boolean()
]);

export const parameterValueOrAvatarSchema = z.union([
  parameterValueAvatarIdSchema,
  parameterValueNumberSchema,
  z.boolean()
]);

export const parameterValueOrAvatarFormSchema = z.union([
  parameterValueStringSchema,
  parameterValueAvatarIdSchema,
  parameterValueNumberSchema,
  z.boolean()
]);

export const parameterValueSimpleSchema = z.union([
  z.number(),
  z.boolean()
]);

export const parameterValueOrAvatarSimpleSchema = z.union([
  z.string(),
  z.number(),
  z.boolean()
]);
