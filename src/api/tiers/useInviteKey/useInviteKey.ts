import { z } from 'zod';

export const UseInviteKeyFormSchema = z.object({
  key: z.string().length(16, { message: 'Invalid key' }),
});

export type UseInviteKeyFormDTO = z.infer<typeof UseInviteKeyFormSchema>;
