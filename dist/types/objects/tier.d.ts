import { z } from 'zod';
export declare const TierSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    callBacks: z.ZodNumber;
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
    callBacks: number;
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
    callBacks: number;
    stateBadges: number;
}>;
export type TierDTO = z.infer<typeof TierSchema>;