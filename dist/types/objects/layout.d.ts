import { z } from 'zod';
export declare const LayoutSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    label: z.ZodString;
    avatars: z.ZodArray<z.ZodString, "many">;
    healthEnabled: z.ZodBoolean;
    healthPath: z.ZodNullable<z.ZodString>;
    healthMax: z.ZodNullable<z.ZodNumber>;
    useCostEnabled: z.ZodBoolean;
    useCostPath: z.ZodNullable<z.ZodString>;
    useCostMax: z.ZodNullable<z.ZodNumber>;
    groups: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        order: z.ZodNumber;
        width: z.ZodNativeEnum<typeof import("../..").SegmentWidth>;
        visibilityParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            label: z.ZodString;
            path: z.ZodString;
            value: z.ZodString;
            seconds: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }, {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }>, "many">>;
        interactionKeyId: z.ZodNullable<z.ZodString>;
        buttons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            label: z.ZodString;
            path: z.ZodString;
            value: z.ZodString;
            valueAlt: z.ZodString;
            buttonType: z.ZodNativeEnum<typeof import("../..").ButtonType>;
            imageOrientation: z.ZodNativeEnum<typeof import("../..").ButtonImageOrientation>;
            order: z.ZodNumber;
            useCost: z.ZodNullable<z.ZodNumber>;
            image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                fileName: z.ZodString;
                urlPath: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                fileName: string;
                urlPath: string;
            }, {
                id: string;
                fileName: string;
                urlPath: string;
            }>>>;
            callbackParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
            }, {
                label: z.ZodString;
                path: z.ZodString;
                value: z.ZodString;
                seconds: z.ZodNumber;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }>, "many">>;
            visibilityParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
            }, {
                label: z.ZodString;
                path: z.ZodString;
                value: z.ZodString;
                seconds: z.ZodNumber;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }>, "many">>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }, {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        width: import("../..").SegmentWidth;
        order: number;
        label: string;
        interactionKeyId: string | null;
        buttons?: {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        visibilityParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
    }, {
        id: string;
        width: import("../..").SegmentWidth;
        order: number;
        label: string;
        interactionKeyId: string | null;
        buttons?: {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        visibilityParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
    }>, "many">>;
    controlParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        path: z.ZodString;
        value: z.ZodString;
        seconds: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }, {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }>, "many">>;
    stateBadges: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        type: z.ZodNativeEnum<typeof import("../..").StateBadgeType>;
        path: z.ZodString;
        value: z.ZodString;
        label: z.ZodString;
        icon: z.ZodString;
        order: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        type: import("../..").StateBadgeType;
        id: string;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }, {
        type: import("../..").StateBadgeType;
        id: string;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    avatars: string[];
    healthEnabled: boolean;
    healthPath: string | null;
    healthMax: number | null;
    useCostEnabled: boolean;
    useCostPath: string | null;
    useCostMax: number | null;
    groups?: {
        id: string;
        width: import("../..").SegmentWidth;
        order: number;
        label: string;
        interactionKeyId: string | null;
        buttons?: {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        visibilityParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
    }[] | undefined;
    controlParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
    stateBadges?: {
        type: import("../..").StateBadgeType;
        id: string;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[] | undefined;
}, {
    id: string;
    label: string;
    avatars: string[];
    healthEnabled: boolean;
    healthPath: string | null;
    healthMax: number | null;
    useCostEnabled: boolean;
    useCostPath: string | null;
    useCostMax: number | null;
    groups?: {
        id: string;
        width: import("../..").SegmentWidth;
        order: number;
        label: string;
        interactionKeyId: string | null;
        buttons?: {
            id: string;
            imageOrientation: import("../..").ButtonImageOrientation;
            order: number;
            value: string;
            label: string;
            path: string;
            useCost: number | null;
            valueAlt: string;
            buttonType: import("../..").ButtonType;
            interactionKeyId: string | null;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
            callbackParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        visibilityParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
    }[] | undefined;
    controlParameters?: {
        id: string;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[] | undefined;
    stateBadges?: {
        type: import("../..").StateBadgeType;
        id: string;
        order: number;
        value: string;
        label: string;
        path: string;
        icon: string;
    }[] | undefined;
}>;
export type LayoutDTO = z.infer<typeof LayoutSchema>;
