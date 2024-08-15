import { z } from 'zod';
export declare const OrderFormSchema: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    order: number;
}, {
    id: string;
    order: number;
}>, "many">;
export type OrderFormDTO = z.infer<typeof OrderFormSchema>;
