import { z } from 'zod';
export declare const BackgroundSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    tier: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        interactionKeys: z.ZodNumber;
        layouts: z.ZodNumber;
        layoutAvatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        groups: z.ZodNumber;
        parameterButtons: z.ZodNumber;
        presetButtons: z.ZodNumber;
        presetButtonParameters: z.ZodNumber;
        customPresets: z.ZodBoolean;
        parameterBadges: z.ZodNumber;
        avatarButtons: z.ZodNumber;
        visibilityParameters: z.ZodNumber;
        callbackParameters: z.ZodNumber;
        inviteKeys: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        groups: number;
        id: string;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterButtons: number;
        presetButtons: number;
        presetButtonParameters: number;
        customPresets: boolean;
        parameterBadges: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        inviteKeys: number;
    }, {
        groups: number;
        id: string;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterButtons: number;
        presetButtons: number;
        presetButtonParameters: number;
        customPresets: boolean;
        parameterBadges: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        inviteKeys: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    tier?: {
        groups: number;
        id: string;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterButtons: number;
        presetButtons: number;
        presetButtonParameters: number;
        customPresets: boolean;
        parameterBadges: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        inviteKeys: number;
    } | undefined;
}, {
    id: string;
    label: string;
    tier?: {
        groups: number;
        id: string;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterButtons: number;
        presetButtons: number;
        presetButtonParameters: number;
        customPresets: boolean;
        parameterBadges: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        inviteKeys: number;
    } | undefined;
}>;
export type BackgroundDTO = z.infer<typeof BackgroundSchema>;
