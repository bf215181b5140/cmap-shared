import { z } from 'zod';
export declare const ParameterBadgeFormSchema: z.ZodEffects<z.ZodObject<{
    layoutId: z.ZodString;
    parameterBadges: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodLiteral<"">, z.ZodEffects<z.ZodString, string, string>]>;
        label: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        icon: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    parameterBadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
    layoutId: string;
}, {
    parameterBadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
    layoutId: string;
}>, {
    parameterBadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
    layoutId: string;
}, {
    parameterBadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[];
    layoutId: string;
}>;
export type ParameterBadgeFormDTO = z.infer<typeof ParameterBadgeFormSchema>;
