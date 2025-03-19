import { z } from 'zod';
export declare const ParameterBadgeFormSchema: z.ZodEffects<z.ZodObject<{
    layoutId: z.ZodString;
    parameterBadges: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
        path: z.ZodString;
        value: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodLiteral<"">, null, "">, z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>]>>;
        label: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        icon: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: number | boolean | null;
        label: string;
        path: string;
        icon: string;
    }, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string | number | boolean | null;
        label: string;
        path: string;
        icon: string;
    }>, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: number | boolean | null;
        label: string;
        path: string;
        icon: string;
    }, {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: string | number | boolean | null;
        label: string;
        path: string;
        icon: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parameterBadges: {
        type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
        id: string | null;
        order: number;
        value: number | boolean | null;
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
        value: string | number | boolean | null;
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
        value: number | boolean | null;
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
        value: string | number | boolean | null;
        label: string;
        path: string;
        icon: string;
    }[];
    layoutId: string;
}>;
export type ParameterBadgeFormDTO = z.infer<typeof ParameterBadgeFormSchema>;
