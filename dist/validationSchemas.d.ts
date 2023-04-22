import { z } from 'zod';
declare const profileSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    hidden: z.ZodBoolean;
    picture: z.ZodNullable<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
    picture?: any;
}, {
    displayName?: string;
    bio?: string;
    hidden?: boolean;
    picture?: any;
}>;
declare const avatarSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}, {
    id?: string;
    vrcId?: string;
    label?: string;
    default?: boolean;
}>;
declare const layoutSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    order?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    order?: number;
    parentId?: string;
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
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueType?: string;
    buttonType?: string;
    image?: any;
    order?: number;
    parentId?: string;
}, {
    id?: string;
    label?: string;
    path?: string;
    value?: string;
    valueType?: string;
    buttonType?: string;
    image?: any;
    order?: number;
    parentId?: string;
}>;
export { profileSchema, avatarSchema, layoutSchema, buttonSchema };
