import { z } from 'zod';
import { passwordSchema, usernameSchema } from '../../shared';

export const LoginFormSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export type LoginFormDTO = z.infer<typeof LoginFormSchema>;
