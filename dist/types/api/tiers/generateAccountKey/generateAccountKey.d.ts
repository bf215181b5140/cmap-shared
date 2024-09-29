import { z } from 'zod';
export declare const GeneratedAccountKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    key: z.ZodString;
    id: z.ZodString;
    tier: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
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
        controlParameters: z.ZodNumber;
        stateBadges: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
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
        controlParameters: number;
        stateBadges: number;
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
        controlParameters: number;
        stateBadges: number;
    }>>;
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
        controlParameters: number;
        stateBadges: number;
    } | null;
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
        controlParameters: number;
        stateBadges: number;
    } | null;
    used: boolean;
}>;
export type GeneratedAccountKeyDTO = z.infer<typeof GeneratedAccountKeySchema>;
