import { z } from 'zod';

const profileSchema = z.object({
    displayName: z.string().min(3).max(50),
    bio: z.string().max(500),
    hidden: z.boolean()
});

const avatarSchema = z.object({
    id: z.string().nullable(),
    vrcId: z.string(),
    label: z.string().min(3).max(50),
    default: z.boolean()
});

const layoutSchema = z.object({
    id: z.string().nullable(),
    label: z.string().min(3).max(50),
    order: z.number(),
    avatar: z.string().optional()
});

const buttonSchema = z.object({
    id: z.string().nullable(),
    label: z.string().max(20).nullable(),
    path: z.string().max(100),
    value: z.string().max(5),
    valueType: z.string(),
    buttonType: z.string(),
    image: z.any().nullable(),
    order: z.number(),
    layout: z.string().optional()
});

export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
