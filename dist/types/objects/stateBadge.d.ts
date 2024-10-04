import { z } from 'zod';
export declare const StateBadgeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
    path: z.ZodString;
    value: z.ZodString;
    label: z.ZodString;
    icon: z.ZodString;
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
    id: string;
    order: number;
    value: string;
    label: string;
    path: string;
    icon: string;
}, {
    type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
    id: string;
    order: number;
    value: string;
    label: string;
    path: string;
    icon: string;
}>;
export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;
