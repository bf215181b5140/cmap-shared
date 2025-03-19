import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../../shared';

export const LoginTokenSchema = z.object({
  apiToken: z.string(),
  displayName: z.string(),
  isAdmin: z.boolean(),
});

export type LoginTokenDTO = z.infer<typeof LoginTokenSchema>;

export const LoginFormSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export type LoginFormDTO = z.infer<typeof LoginFormSchema>;
