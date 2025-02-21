import { z } from 'zod';
export declare const GeneratedInviteKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    key: z.ZodString;
    id: z.ZodString;
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
}, {
    used: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    key: string;
    id: string;
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
    used: boolean;
}, {
    key: string;
    id: string;
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
    used: boolean;
}>;
export type GeneratedInviteKeyDTO = z.infer<typeof GeneratedInviteKeySchema>;
export declare const UseInviteKeyFormSchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
}, {
    key: string;
}>;
export type UseInviteKeyFormDTO = z.infer<typeof UseInviteKeyFormSchema>;
export declare const TiersPageSchema: z.ZodObject<{
    tiers: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    clientTier: z.ZodObject<{
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
    generatedKeys: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        key: z.ZodString;
        id: z.ZodString;
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
    }, {
        used: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
        key: string;
        id: string;
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
        used: boolean;
    }, {
        key: string;
        id: string;
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
        used: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tiers: {
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
    }[];
    clientTier: {
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
    generatedKeys: {
        key: string;
        id: string;
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
        used: boolean;
    }[];
}, {
    tiers: {
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
    }[];
    clientTier: {
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
    generatedKeys: {
        key: string;
        id: string;
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
        used: boolean;
    }[];
}>;
export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
