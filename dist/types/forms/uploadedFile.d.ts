import { z } from 'zod';
export declare const UploadFileFormSchema: z.ZodObject<{
    parentType: z.ZodUnion<[z.ZodLiteral<"client">, z.ZodLiteral<"button">]>;
    parentId: z.ZodString;
    file: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    parentType: "button" | "client";
    file?: any;
}, {
    parentId: string;
    parentType: "button" | "client";
    file?: any;
}>;
export type UploadFileFormDTO = z.infer<typeof UploadFileFormSchema>;
