import { z } from 'zod';
export declare const BackgroundSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    tier: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
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
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
        inviteKeys: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
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
        inviteKeys: number;
    } | undefined;
}>;
export type BackgroundDTO = z.infer<typeof BackgroundSchema>;
