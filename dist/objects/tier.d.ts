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
    controlParameters: z.ZodNumber;
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
    controlParameters: number;
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
    controlParameters: number;
    parameterBadges: number;
    inviteKeys: number;
}>;
export type TierDTO = z.infer<typeof TierSchema>;
