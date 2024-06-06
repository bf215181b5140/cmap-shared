import { z } from 'zod';
export declare const OrderSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    order: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    order: number;
}, {
    id: string;
    order: number;
}>;
export declare const OrderListSchema: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
export type OrderDTO = z.infer<typeof OrderSchema>;
export type OrderListDTO = z.infer<typeof OrderListSchema>;
