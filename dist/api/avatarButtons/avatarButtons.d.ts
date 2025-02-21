import { z } from 'zod';
export declare const AvatarButtonsPageSchema: z.ZodObject<{
    tier: z.ZodObject<{
        id: z.ZodString;
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        interactionKeys: z.ZodNumber;
        layouts: z.ZodNumber;
        avatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        visibilityParameters: z.ZodNumber;
        callbackParameters: z.ZodNumber;
        parameterBadges: z.ZodNumber;
        presets: z.ZodNumber;
        presetParameters: z.ZodNumber;
        avatarButtons: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
        inviteKeys: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        presetParameters: number;
        avatarButtons: number;
        inviteKeys: number;
    }, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        presetParameters: number;
        avatarButtons: number;
        inviteKeys: number;
    }>;
    theme: z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            interactionKeys: z.ZodNumber;
            layouts: z.ZodNumber;
            avatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            visibilityParameters: z.ZodNumber;
            callbackParameters: z.ZodNumber;
            parameterBadges: z.ZodNumber;
            presets: z.ZodNumber;
            presetParameters: z.ZodNumber;
            avatarButtons: z.ZodNumber;
            groups: z.ZodNumber;
            buttons: z.ZodNumber;
            inviteKeys: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        }, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        } | undefined;
    }, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        } | undefined;
    }>;
    avatarButtons: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodString;
        order: z.ZodNumber;
        imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
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
        interactionKeyId: z.ZodNullable<z.ZodString>;
    }, {
        avatarId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarId: string;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }, {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarId: string;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }>, "many">;
    interactionKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        key: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        key: string;
        id: string;
        label: string;
    }, {
        key: string;
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
    avatarButtons: {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarId: string;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[];
    tier: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        presetParameters: number;
        avatarButtons: number;
        inviteKeys: number;
    };
    theme: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        } | undefined;
    };
}, {
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
    avatarButtons: {
        id: string;
        imageOrientation: "Horizontal" | "Square" | "Vertical";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarId: string;
        image?: {
            id: string;
            fileName: string;
            urlPath: string;
        } | null | undefined;
    }[];
    tier: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        presetParameters: number;
        avatarButtons: number;
        inviteKeys: number;
    };
    theme: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            presetParameters: number;
            avatarButtons: number;
            inviteKeys: number;
        } | undefined;
    };
}>;
export type AvatarButtonsPageDTO = z.infer<typeof AvatarButtonsPageSchema>;
