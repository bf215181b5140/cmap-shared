import { z } from 'zod';
export declare const InviteKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    key: z.ZodString;
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
}>, "strip", z.ZodTypeAny, {
    key: string;
    id: string;
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
    key: string;
    id: string;
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
export type InviteKeyDTO = z.infer<typeof InviteKeySchema>;
