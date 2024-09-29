import { z } from 'zod';

export const UseAccountKeyFormSchema = z.object({
    key: z.string().min(1).max(32),
});

export type UseAccountKeyFormDTO = z.infer<typeof UseAccountKeyFormSchema>;
