import { z } from 'zod';

export const ProfileFormSchema = z.object({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    hidden: z.boolean(),
    image: z.any().optional().nullable(),
});

type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
