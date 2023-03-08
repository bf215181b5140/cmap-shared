import { z } from 'zod';
declare const profileSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
}>;
declare const avatarSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodNumber>;
    client: z.ZodNumber;
    avatar: z.ZodString;
    label: z.ZodString;
    primary: z.ZodBoolean;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    client?: number;
    avatar?: string;
    label?: string;
    primary?: boolean;
    order?: number;
}, {
    id?: number;
    client?: number;
    avatar?: string;
    label?: string;
    primary?: boolean;
    order?: number;
}>;
declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodNumber>;
    avatar: z.ZodNumber;
    name: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    avatar?: number;
    name?: string;
    order?: number;
}, {
    id?: number;
    avatar?: number;
    name?: string;
    order?: number;
}>;
declare const buttonSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodNumber>;
    layout: z.ZodNumber;
    label: z.ZodNullable<z.ZodString>;
    key: z.ZodString;
    value: z.ZodString;
    type: z.ZodString;
    image: z.ZodNullable<z.ZodAny>;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    layout?: number;
    label?: string;
    key?: string;
    value?: string;
    type?: string;
    image?: any;
    order?: number;
}, {
    id?: number;
    layout?: number;
    label?: string;
    key?: string;
    value?: string;
    type?: string;
    image?: any;
    order?: number;
}>;
export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
