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
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
    client: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
    client?: string;
}, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
    client?: string;
}>;
declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    order?: number;
    avatar?: string;
}, {
    id?: string;
    label?: string;
    order?: number;
    avatar?: string;
}>;
declare const buttonSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodNullable<z.ZodString>;
    path: z.ZodString;
    value: z.ZodString;
    valueType: z.ZodString;
    buttonType: z.ZodString;
    image: z.ZodNullable<z.ZodAny>;
    order: z.ZodNumber;
    layout: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueType?: string;
    buttonType?: string;
    image?: any;
    order?: number;
    layout?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueType?: string;
    buttonType?: string;
    image?: any;
    order?: number;
    layout?: string;
}>;
export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
