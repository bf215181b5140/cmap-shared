import { z } from 'zod';
export declare const RegistrationKeySchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    key: z.ZodString;
    tier: z.ZodOptional<z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
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
    }>>>;
    used: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    key: string;
    id: string;
    used: boolean;
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
        controlParameters: number;
        stateBadges: number;
    } | null | undefined;
}, {
    key: string;
    id: string;
    used: boolean;
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
        controlParameters: number;
        stateBadges: number;
    } | null | undefined;
}>;
export type RegistrationKeyDTO = z.infer<typeof RegistrationKeySchema>;
