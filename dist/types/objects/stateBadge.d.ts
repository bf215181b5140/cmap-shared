import { z } from 'zod';
import { StateBadgeType } from '../enums/stateBadge';
export declare const StateBadgeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    type: z.ZodNativeEnum<typeof StateBadgeType>;
    path: z.ZodString;
    value: z.ZodString;
    label: z.ZodString;
    icon: z.ZodString;
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    type: StateBadgeType;
    id: string;
    order: number;
    value: string;
    label: string;
    path: string;
    icon: string;
}, {
    type: StateBadgeType;
    id: string;
    order: number;
    value: string;
    label: string;
    path: string;
    icon: string;
}>;
export type StateBadgeDTO = z.infer<typeof StateBadgeSchema>;
