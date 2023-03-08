import { z } from 'zod';

const profileSchema = z.object({
    displayName: z.string().min(3).max(50),
    bio: z.string().max(500),
    hidden: z.boolean()
});

const avatarSchema = z.object({
    id: z.number().nullable(),
    client: z.number(),
    avatar: z.string(),
    label: z.string(),
    primary: z.boolean(),
    order: z.number()
});

const layoutSchema = z.object({
    id: z.number().nullable(),
    avatar: z.number(),
    name: z.string(),
    order: z.number()
});

const buttonSchema = z.object({
    id: z.number().nullable(),
    layout: z.number(),
    label: z.string().max(20).nullable(),
    key: z.string().max(100),
    value: z.string().max(5),
    type: z.string(),
    image: z.any().nullable(),
    order: z.number()
});

export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
