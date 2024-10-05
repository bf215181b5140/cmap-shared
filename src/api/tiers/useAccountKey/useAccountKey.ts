import { z } from 'zod';

export const UseAccountKeyFormSchema = z.object({
    key: z.string().length(16, { message: 'Invalid key' }),
});

export type UseAccountKeyFormDTO = z.infer<typeof UseAccountKeyFormSchema>;
