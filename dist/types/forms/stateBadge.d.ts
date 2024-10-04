import { z } from 'zod';
export declare const StateBadgeFormSchema: z.ZodEffects<z.ZodObject<{
    parentId: z.ZodString;
    statebadges: z.ZodArray<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodLiteral<"">, z.ZodEffects<z.ZodString, string, string>]>;
        label: z.ZodString;
        icon: z.ZodString;
        order: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }>, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    statebadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
}, {
    parentId: string;
    statebadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
}>, {
    parentId: string;
    statebadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
}, {
    parentId: string;
    statebadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
}>;
export type StateBadgeFormDTO = z.infer<typeof StateBadgeFormSchema>;
