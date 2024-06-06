import { z } from 'zod';
export declare enum StateBadgeKey {
    Mute = "Mute",
    VrMode = "VrMode",
    TrackingType = "TrackingType",
    Afk = "Afk",
    Custom = "Custom"
}
export declare const StateBadgeSchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    key: z.ZodNativeEnum<typeof StateBadgeKey>;
    parameter: z.ZodString;
    value: z.ZodString;
    label: z.ZodString;
    icon: z.ZodString;
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    key: StateBadgeKey;
    id: string | null;
    order: number;
    value: string;
    label: string;
    icon: string;
    parameter: string;
}, {
    key: StateBadgeKey;
    id: string | null;
    order: number;
    value: string;
    label: string;
    icon: string;
    parameter: string;
}>, {
    key: StateBadgeKey;
    id: string | null;
    order: number;
    value: string;
    label: string;
    icon: string;
    parameter: string;
}, {
    key: StateBadgeKey;
    id: string | null;
    order: number;
    value: string;
    label: string;
    icon: string;
    parameter: string;
}>;
export declare const StateBadgesSchema: z.ZodEffects<z.ZodObject<{
    avatarId: z.ZodString;
    badges: z.ZodArray<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        key: z.ZodNativeEnum<typeof StateBadgeKey>;
        parameter: z.ZodString;
        value: z.ZodString;
        label: z.ZodString;
        icon: z.ZodString;
        order: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }, {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }>, {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }, {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    avatarId: string;
    badges: {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }[];
}, {
    avatarId: string;
    badges: {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }[];
}>, {
    avatarId: string;
    badges: {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }[];
}, {
    avatarId: string;
    badges: {
        key: StateBadgeKey;
        id: string | null;
        order: number;
        value: string;
        label: string;
        icon: string;
        parameter: string;
    }[];
}>;
export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;
export type StateBadgesDTO = z.infer<typeof StateBadgesSchema>;
